import { validate, ValidationError } from '@webblocksapp/class-validator';
import { ValidatorOptions } from '@webblocksapp/class-validator';
import { BehaviorSubject } from 'rxjs';
import { BaseModelArgs, Nested } from '../types/base-model-args.type';
import { set, get, isEmpty } from 'lodash';

export class BaseModel {
  private dtoObject: any;
  private errors: Array<ValidationError> = [];
  private submitted: boolean = false;
  private change: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );
  public isValid: boolean = false;
  public nested: Nested[];
  private validatingNestedFields: String[] = [];

  constructor(DtoClass: any, args?: BaseModelArgs) {
    this.setDto(DtoClass);
    this.setBaseModelArgs(args);
    this.initNested();
  }

  private setDto(DtoClass: any): void {
    this.dtoObject = new DtoClass();
  }

  public setBaseModelArgs(args: BaseModelArgs) {
    this.nested = args?.nested;
  }

  private initNested(): void {
    this.nested?.forEach((item) => {
      set(this.dtoObject, item.path, new item.dtoClass());
    });
  }

  public getDto(): any {
    return this.dtoObject;
  }

  public setValue(path: string, value: any): void {
    set(this.dtoObject, path, value || null);
  }

  public getValue(path: string): any {
    return get(this.dtoObject, path);
  }

  private resetDto(): void {
    const keys = Object.keys(this.dtoObject);
    keys.forEach((key) => {
      this.dtoObject[key] = null;
    });
  }

  public fill(data: any): void {
    const objectKeys = Object.keys(data);
    objectKeys.forEach((key) => {
      const value = data[key];
      this.setValue(key, value);
    });
  }

  public isFilled(): boolean {
    const dto = this.getDto();
    const objectKeys = Object.keys(dto);
    for (let key of objectKeys) {
      if (isEmpty(dto[key])) {
        return false;
      }
    }

    return true;
  }

  public setSubmitted(flag: boolean): void {
    this.submitted = flag;
  }

  public getSubmitted(): boolean {
    return this.submitted;
  }

  private setErrors(errors: Array<ValidationError>): void {
    errors.forEach((_error) => {
      const hasError = this.errors.filter(
        (error) => error.property === _error.property,
      )[0];

      if (isEmpty(hasError)) {
        this.errors.push(_error);
      }
    });

    this.errors = this.errors.map((error) => {
      for (let _error of errors) {
        if (error.property === _error.property) {
          return _error;
        }
      }

      return error;
    });
  }

  private cleanError(
    fieldName: string,
    errors: ValidationError[] = this.errors,
    path: string = '',
  ): void {
    if (fieldName.match(/\./) && !isEmpty(errors)) {
      let fieldNameArray = fieldName.split('.');
      let parentFieldName = fieldNameArray.shift();
      let childFieldName = fieldNameArray.join('.');

      let foundError = errors.find(
        (error) => error.property === parentFieldName,
      );

      let foundErrorIndex = errors.findIndex(
        (error) => error.property === parentFieldName,
      );

      if (foundError !== undefined && foundError.children !== undefined) {
        path = `${path}[${foundErrorIndex}].children`;
        return this.cleanError(childFieldName, foundError.children, path);
      }
    }

    if (path) {
      set(
        this.errors,
        path,
        errors.filter((error) => {
          return error.property !== fieldName;
        }),
      );
    } else {
      this.errors = errors.filter((error) => {
        return error.property !== fieldName && isEmpty(error.children);
      });
    }
  }

  private cleanErrors(): void {
    this.errors = [];
  }

  public getErrors(): Array<ValidationError> {
    return this.errors;
  }

  public getError(
    fieldName: string,
    errors: ValidationError[] = this.errors,
  ): ValidationError {
    if (fieldName.match(/\./) && !isEmpty(errors)) {
      let fieldNameArray = fieldName.split('.');
      let parentFieldName = fieldNameArray.shift();
      let childFieldName = fieldNameArray.join('.');
      let foundError: any = errors.find(
        (error) => error.property === parentFieldName,
      );

      if (
        foundError !== undefined &&
        !isEmpty(foundError.children) &&
        this.validatingNestedFields.indexOf(fieldName) === -1
      ) {
        return this.getError(childFieldName, foundError.children);
      } else {
        this.validatingNestedFields = this.validatingNestedFields.filter(
          (item) => item !== fieldName,
        );
        return errors.find((error) => error.property === fieldName);
      }
    }

    return errors.find((error) => error.property === fieldName) || null;
  }

  public validate(validatorOptions?: ValidatorOptions): Promise<any> {
    return new Promise((resolve) => {
      validatorOptions = Object.assign(
        {
          propertyName: undefined,
          stopAtFirstError: true,
        },
        validatorOptions,
      );

      validate(this.dtoObject, validatorOptions).then((errors) => {
        if (errors.length === 0) {
          this.cleanErrors();
          resolve({
            isValid: true,
            validatedData: this.dtoObject,
            errors: null,
          });
          this.isValid = true;
        }

        if (errors.length > 0) {
          this.setErrors(errors);
          resolve({ isValid: false, validatedData: null, errors });
          this.isValid = false;
        }

        this.emitChange();
      });
    });
  }

  public validateField(
    fieldName: string,
    validatorOptions?: ValidatorOptions,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      validatorOptions = Object.assign(
        {
          propertyName: fieldName,
          stopAtFirstError: true,
        },
        validatorOptions,
      );

      validate(this.dtoObject, validatorOptions).then((errors) => {
        if (errors.length === 0) {
          this.cleanError(fieldName);
          resolve(this.dtoObject[fieldName]);
        }

        if (errors.length === 1) {
          if (fieldName.match(/\./)) {
            if (this.validatingNestedFields.indexOf(fieldName) === -1) {
              this.validatingNestedFields.push(fieldName);
            }
            errors[0].property = fieldName;
          }
          this.setErrors(errors);
          reject(errors);
        }

        this.emitChange();
      });
    });
  }

  public emitChange(): void {
    const currentValue = this.change.getValue();
    this.change.next(!currentValue);
  }

  public getChange(): BehaviorSubject<Boolean> {
    return this.change;
  }

  public reset(): void {
    this.cleanErrors();
    this.setSubmitted(false);
    this.resetDto();
    this.emitChange();
  }
}
