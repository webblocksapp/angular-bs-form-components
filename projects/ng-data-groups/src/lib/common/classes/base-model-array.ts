import { ValidatorOptions } from '@webblocksapp/class-validator';
import { BehaviorSubject } from 'rxjs';
import { BaseModel } from './base-model';
import { Subscription } from 'rxjs';
import { BaseModelArgs } from '../types';
import { cloneDeep } from 'lodash';

export class BaseModelArray {
  private dtoClass: any;
  private models: Array<BaseModel> = [];
  private change: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );
  private onEnterPressCallback: Function;
  private modelsChanges$: Subscription[] = [];
  private args: BaseModelArgs;

  public isValid: boolean = false;
  public length: number = 0;
  public minLength: number;
  public maxLength: number;

  constructor(DtoClass: any, args?: BaseModelArgs) {
    this.args = args;
    this.dtoClass = DtoClass;
    this.setBaseModelArrayArgs(args);
    this.setModels();
    this.setLength();
    this.subscribeToAllChanges();
  }

  private setBaseModelArrayArgs(args: BaseModelArgs) {
    this.minLength = args?.configs?.minLength || 1;
    this.maxLength = args?.configs?.maxLength;
  }

  private setModels() {
    for (let i = 0; i < this.minLength; i++) {
      this.models.push(new BaseModel(this.dtoClass, this.args));
    }
  }

  private setLength(): void {
    this.length = this.models.length;
  }

  public fill(data: Array<any>, reset: boolean = true): void {
    let i = 0;

    for (const [index, item] of data.entries()) {
      i = index;

      if (this.maxLength !== undefined && i >= this.maxLength) {
        break;
      }

      if (this.models[index] !== undefined) {
        this.models[index].setIndex(index);
        this.models[index].setMountedOnEnterPress(false);
        this.models[index].fill(item);
      } else {
        const model = new BaseModel(this.dtoClass, this.args);
        model.setIndex(index);
        model.fill(item);
        this.models.push(model);
      }
    }

    if (reset) {
      this.deleteFromNext(i);
    }

    this.setLength();
    this.subscribeToAllChanges();
  }

  private deleteFromNext(index) {
    this.models.splice(index + 1, this.models.length - 1);
  }

  public isFilled(index: number = undefined): boolean {
    if (index === undefined) {
      for (let model of this.models) {
        if (model.isFilled() === false) {
          return false;
        }
      }

      return true;
    } else {
      return this.models[index].isFilled();
    }
  }

  public get(): Array<BaseModel> {
    return this.models;
  }

  public getDtos(): Array<any> {
    const dtos = [];
    this.models.forEach((model) => {
      dtos.push(model.getDto());
    });

    return dtos;
  }

  public find(index: number): BaseModel {
    return this.models[index];
  }

  public add(data: any = null): void {
    const model = new BaseModel(this.dtoClass, this.args);
    if (data) {
      model.fill(data);
    }
    this.models.push(model);
    model.setIndex(this.models.length - 1);
    this.setLength();
    this.addModelChangeSubscription(model);
    this.subscribeToEnterPress(model);
    this.emitChange();
  }

  public delete(index: number): void {
    let clonedModels = cloneDeep(this.models);
    this.models.splice(-1, 1);

    clonedModels = clonedModels.filter((model) => {
      if (clonedModels.indexOf(model) !== index) {
        return true;
      }

      this.unsubscribeToEnterPress(model);
      this.deleteModelChangeSubscription(index);
    });

    this.models = this.models.map((model, i) => {
      if (clonedModels[i] !== undefined) {
        model.setIndex(i);
        model.setMap(clonedModels[i].getMap());
        model.setErrors(clonedModels[i].getErrors(), true);
        model.fill(clonedModels[i].getDto(), false);
        model.emitChange();
      }

      return model;
    });

    this.setLength();
    this.emitChange();
  }

  public count(): number {
    return this.models.length;
  }

  public reset(index: number = undefined, all: boolean = true): void {
    if (index === undefined) {
      if (all) {
        for (let i = 0; i < this.minLength; i++) {
          this.models[i].reset();
          this.models[i].setMountedOnEnterPress(false);
        }

        this.deleteFromNext(this.minLength - 1);
        this.setLength();
        this.subscribeToAllChanges();

        for (let i = 0; i < this.minLength; i++) {
          this.models[i].setMountedOnEnterPress(true);
        }
      } else {
        this.models.forEach((model) => {
          model.reset();
        });
      }
    } else {
      const isSubmitted = this.models[index].isSubmitted;
      this.models[index].reset();
      this.models[index].setIsSubmitted(isSubmitted);
    }
  }

  public validate(
    validatorOptions?: ValidatorOptions,
    index?: number,
  ): Promise<any> {
    if (index === undefined) {
      const promises = [];
      this.models.forEach((model) => {
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
        resolve(this.models[index].validate(validatorOptions));
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
    this.models.forEach((model) => {
      this.addModelChangeSubscription(model);
      this.subscribeToEnterPress(model);
    });
  }

  private generateModelChangeSubscription(model: BaseModel): Subscription {
    const modelChangesSubject = model.getChange();
    return modelChangesSubject.subscribe(() => {
      const currentValue = this.change.getValue();
      this.change.next(!currentValue);
    });
  }

  private addModelChangeSubscription(model: BaseModel): void {
    const modelChangeSubscription = this.generateModelChangeSubscription(model);
    this.modelsChanges$.push(modelChangeSubscription);
  }

  private deleteModelChangeSubscription(index): void {
    this.modelsChanges$[index].unsubscribe();
    this.modelsChanges$ = this.modelsChanges$.filter((item, i) => i !== index);
  }

  private unSubscribeToAllChanges(): void {
    this.modelsChanges$.forEach((modelChanges$) => {
      modelChanges$.unsubscribe();
    });
    this.unbindOnEnterPress();
    this.modelsChanges$ = [];
  }

  public onEnterPress(callback: Function): void {
    this.models.forEach((model) => {
      model.onEnterPress(callback);
    });

    this.onEnterPressCallback = callback;
  }

  public unbindOnEnterPress(): void {
    if (this.onEnterPressCallback !== undefined) {
      this.models.forEach((model) => {
        model.unbindOnEnterPress();
      });
    }
  }

  public subscribeToEnterPress(model): void {
    if (this.onEnterPressCallback !== undefined) {
      model.onEnterPress(this.onEnterPressCallback);
    }
  }

  public unsubscribeToEnterPress(model): void {
    if (this.onEnterPressCallback !== undefined) {
      model.unbindOnEnterPress();
    }
  }
}
