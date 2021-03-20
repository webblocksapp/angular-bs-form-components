import { ValidatorOptions } from '@webblocksapp/class-validator';
import { BehaviorSubject } from 'rxjs';
import { BaseModel } from './base-model';

export class BaseModelArray {
  private dtoClass: any;
  private array: Array<BaseModel> = [];
  private change: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );

  constructor(DtoClass: any) {
    this.dtoClass = DtoClass;
    this.array = [new BaseModel(this.dtoClass)];
  }

  public fill(data: Array<any>): void {
    const array = [];
    data.forEach((item: any) => {
      const model = new BaseModel(this.dtoClass);
      model.fill(item);
      array.push(model);
    });

    this.array = array;
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
    const model = new BaseModel(this.dtoClass);
    if (data) {
      model.fill(data);
    }
    this.array.push(model);
    this.emitChange();
  }

  public delete(index: number): void {
    this.array = this.array.filter(
      (item) => this.array.indexOf(item) !== index,
    );
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

  public emitChange(): void {
    const currentValue = this.change.getValue();
    this.change.next(!currentValue);
  }

  public getChange(): BehaviorSubject<Boolean> {
    return this.change;
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
}
