import { ValidatorOptions } from '@webblocksapp/class-validator';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseModel } from './base-model';
import { Subscription } from 'rxjs';
import { BaseModelArgs } from '../types';

export class BaseModelArray {
  private dtoClass: any;
  private array: Array<BaseModel> = [];
  private change: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );
  private errorsChange: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );
  public isValid: boolean = false;
  private errorsChanges$: Subscription[] = [];
  private changes$: Subscription[] = [];
  private args: BaseModelArgs;

  constructor(DtoClass: any, args?: BaseModelArgs) {
    this.args = args;
    this.dtoClass = DtoClass;
    this.array = [new BaseModel(this.dtoClass, this.args)];
    this.subscribeToAllChanges();
    this.subscribeToAllErrorsChanges();
  }

  public fill(data: Array<any>): void {
    const array = [];
    data.forEach((item: any) => {
      const model = new BaseModel(this.dtoClass, this.args);
      model.fill(item);
      array.push(model);
    });

    this.array = array;
    this.subscribeToAllChanges();
    this.subscribeToAllErrorsChanges();
    this.emitChange();
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
    this.addChangeSubscription(model);
    this.addErrorsChangesSubscription(model);
    this.emitChange();
  }

  public delete(index: number): void {
    this.array = this.array
      .filter((item) => {
        if (this.array.indexOf(item) !== index) {
          return true;
        }

        this.deleteChangeSubscription(index);
        this.deleteErrorsChangesSubscription(index);
      })
      .map((item, index) => {
        item.setIndex(index);
        return item;
      });

    this.emitErrorsChange();
    this.emitChange();
  }

  public count(): number {
    return this.array.length;
  }

  public reset(index: number = undefined): void {
    if (index === undefined) {
      this.array.forEach((model) => {
        model.reset();
      });
    } else {
      this.array[index].reset();
    }

    this.emitChange();
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
        this.emitChange();
      });
    } else {
      return new Promise((resolve) => {
        resolve(this.array[index].validate(validatorOptions));
        this.emitChange();
      });
    }
  }

  /**
   * Models changes subscription methods
   */
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

  /**
   * Model errors changes subscription methods
   */
  public emitErrorsChange(): void {
    const currentValue = this.errorsChange.getValue();
    this.errorsChange.next(!currentValue);
  }

  public getErrorsChange(): BehaviorSubject<Boolean> {
    return this.errorsChange;
  }

  private subscribeToAllErrorsChanges(): void {
    this.unSubscribeToAllErrorsChanges();
    this.array.forEach((item) => {
      this.addErrorsChangesSubscription(item);
    });
  }

  private generateErrorsChangesSubscription(model: BaseModel): Subscription {
    const subject = model.getErrorsChange();
    return subject.subscribe(() => {
      const currentValue = this.errorsChange.getValue();
      this.errorsChange.next(!currentValue);
    });
  }

  private addErrorsChangesSubscription(model: BaseModel): void {
    const subscription = this.generateErrorsChangesSubscription(model);
    this.errorsChanges$.push(subscription);
  }

  private deleteErrorsChangesSubscription(index): void {
    this.errorsChanges$[index].unsubscribe();
    this.errorsChanges$ = this.errorsChanges$.filter((item, i) => i !== index);
  }

  private unSubscribeToAllErrorsChanges(): void {
    this.errorsChanges$.forEach((modelErrorsChanges$) => {
      modelErrorsChanges$.unsubscribe();
    });
    this.errorsChanges$ = [];
  }
}
