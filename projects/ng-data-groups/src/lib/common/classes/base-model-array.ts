import { ValidatorOptions } from '@webblocksapp/class-validator';
import { BehaviorSubject } from 'rxjs';
import { BaseModel } from './base-model';
import { Subscription } from 'rxjs';
import { BaseModelArgs } from '../types';
import { cloneDeep } from 'lodash';

export class BaseModelArray {
  private dtoClass: any;
  private array: Array<BaseModel> = [];
  private change: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );

  private changes$: Subscription[] = [];
  private args: BaseModelArgs;
  public isValid: boolean = false;
  public length: number = 0;

  constructor(DtoClass: any, args?: BaseModelArgs) {
    this.args = args;
    this.dtoClass = DtoClass;
    this.array = [new BaseModel(this.dtoClass, this.args)];
    this.setLength();
    this.subscribeToAllChanges();
  }

  private setLength(): void {
    this.length = this.array.length;
  }

  public fill(data: Array<any>, reset: boolean = true): void {
    let i = 0;

    data.forEach((item: any, index) => {
      i = index;
      if (this.array[index] !== undefined) {
        this.array[index].setIndex(index);
        this.array[index].fill(item);
      } else {
        const model = new BaseModel(this.dtoClass, this.args);
        model.setIndex(index);
        model.fill(item);
        this.array.push(model);
      }
    });

    if (reset) {
      this.deleteFromNext(i);
    }

    this.setLength();
    this.subscribeToAllChanges();
  }

  private deleteFromNext(index) {
    this.array.splice(index + 1, this.array.length - 1);
  }

  public isFilled(index: number = undefined): boolean {
    if (index === undefined) {
      for (let model of this.array) {
        if (model.isFilled() === false) {
          return false;
        }
      }

      return true;
    } else {
      return this.array[index].isFilled();
    }
  }

  public get(): Array<BaseModel> {
    return this.array;
  }

  public getDtos(): Array<any> {
    const dtos = [];
    this.array.forEach((model) => {
      dtos.push(model.getDto());
    });

    return dtos;
  }

  public find(index: number): BaseModel {
    return this.array[index];
  }

  public add(data: any = null): void {
    const model = new BaseModel(this.dtoClass, this.args);
    if (data) {
      model.fill(data);
    }
    this.array.push(model);
    model.setIndex(this.array.length - 1);
    this.setLength();
    this.addChangeSubscription(model);
    this.emitChange();
  }

  public delete(index: number): void {
    let clonedArray = cloneDeep(this.array);
    this.array.splice(-1, 1);

    clonedArray = clonedArray.filter((item) => {
      if (clonedArray.indexOf(item) !== index) {
        return true;
      }

      this.deleteChangeSubscription(index);
    });

    this.array = this.array.map((item, i) => {
      if (clonedArray[i] !== undefined) {
        item.setIndex(i);
        item.setMap(clonedArray[i].getMap());
        item.setErrors(clonedArray[i].getErrors(), true);
        item.fill(clonedArray[i].getDto(), false);
        item.emitChange();
      }

      return item;
    });

    this.setLength();
    this.emitChange();
  }

  public count(): number {
    return this.array.length;
  }

  public reset(index: number = undefined, all: boolean = true): void {
    if (index === undefined) {
      if (all) {
        let i = 0;
        this.array[i].reset();
        this.deleteFromNext(i);
        this.setLength();
        this.subscribeToAllChanges();
      } else {
        this.array.forEach((model) => {
          model.reset();
        });
      }
    } else {
      this.array[index].reset({ ignoreIsSubmitted: true });
    }
  }

  public validate(
    validatorOptions?: ValidatorOptions,
    index?: number,
  ): Promise<any> {
    if (index === undefined) {
      const promises = [];
      this.array.forEach((model) => {
        promises.push(
          new Promise((resolve) => {
            resolve(model.validate(validatorOptions));
          }),
        );
      });

      return new Promise((resolve) => {
        Promise.all(promises).then((validationResult) => {
          const isValid = validationResult.filter(
            (result) => result.isValid === false,
          ).length
            ? false
            : true;

          let errors = [];
          let validatedData = null;

          if (!isValid) {
            validationResult.forEach((result) => {
              errors.push(result.errors);
            });
          } else {
            validatedData = [];
            errors = null;
            validationResult.forEach((result) => {
              validatedData.push(result.validatedData);
            });
          }

          const _validationResult = { isValid, validatedData, errors };
          resolve(_validationResult);
          this.isValid = isValid;
        });
      });
    } else {
      return new Promise((resolve) => {
        resolve(this.array[index].validate(validatorOptions));
        this.emitChange();
      });
    }
  }

  public emitChange(): void {
    const currentValue = this.change.getValue();
    this.change.next(!currentValue);
  }

  public getChange(): BehaviorSubject<Boolean> {
    return this.change;
  }

  private subscribeToAllChanges(): void {
    this.unSubscribeToAllChanges();
    this.array.forEach((item) => {
      this.addChangeSubscription(item);
    });
  }

  private generateChangeSubscription(model: BaseModel): Subscription {
    const subject = model.getChange();
    return subject.subscribe(() => {
      const currentValue = this.change.getValue();
      this.change.next(!currentValue);
    });
  }

  private addChangeSubscription(model: BaseModel): void {
    const subscription = this.generateChangeSubscription(model);
    this.changes$.push(subscription);
  }

  private deleteChangeSubscription(index): void {
    this.changes$[index].unsubscribe();
    this.changes$ = this.changes$.filter((item, i) => i !== index);
  }

  private unSubscribeToAllChanges(): void {
    this.changes$.forEach((modelChanges$) => {
      modelChanges$.unsubscribe();
    });
    this.changes$ = [];
  }
}
