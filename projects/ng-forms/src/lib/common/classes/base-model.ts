import { validate, ValidationError } from '@webblocksapp/class-validator';
import { ValidatorOptions } from '@webblocksapp/class-validator';
import { BehaviorSubject } from 'rxjs';
import { BaseModelArgs, Nested } from '../types/base-model-args.type';
import { set, get, isEmpty } from 'lodash';
import { removeArrayIndex, getLastArrayIndex } from '../utils';

export class BaseModel {
  private dtoObject: any;
  private errors: Array<ValidationError> = [];
  private submitted: boolean = false;
  private change: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );
  private errorsChange: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false,
  );
  public isValid: boolean = false;
  public nested: Nested[] = [];
  private validatingNestedFields: String[] = [];
  private index: number = 0;

  constructor(DtoClass: any, args?: BaseModelArgs) {
    this.setDto(DtoClass);
    this.setBaseModelArgs(args);
    this.initNested();
  }

  private setDto(DtoClass: any): void {
    this.dtoObject = new DtoClass();
  }

  public setIndex(index: number) {
    this.index = index;
  }

  public getIndex(): number {
    return this.index;
  }

  public setBaseModelArgs(args: BaseModelArgs) {
    this.nested = args?.nested;
  }

  private initNested(): void {
    this.nested?.forEach((item) => {
      if (item?.multiple === true) {
        set(this.dtoObject, item.path, [new item.dtoClass()]);
      } else {
        set(this.dtoObject, item.path, new item.dtoClass());
      }
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
      const value = this.generateValue(data, key);
      this.setValue(key, value);
    });
  }

  private generateValue(data: any, key: string, path: string = '') {
    if (!path) {
      path = key;
    } else {
      path = `${path}.${key}`;
    }

    const foundNested = this.nested.find((item) => item.path === path);

    if (isEmpty(foundNested)) {
      return data[key];
    }

    if (foundNested?.multiple === true) {
      let nestedArray = [];
      data[key].forEach((item) => {
        let nestedDto = new foundNested.dtoClass();
        const objectKeys = Object.keys(item);
        objectKeys.forEach((childKey) => {
          const value = this.generateValue(item, childKey, path);
          nestedDto[childKey] = value;
        });
        nestedArray.push(nestedDto);
      });

      data[key] = nestedArray;
    } else {
      let nestedDto = new foundNested.dtoClass();
      const objectKeys = Object.keys(data[key]);
      objectKeys.forEach((childKey) => {
        const value = this.generateValue(data[key], childKey, path);
        nestedDto[childKey] = value;
      });
      data[key] = nestedDto;
    }

    return data[key];
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

  private parseFieldName(fieldName: string): string {
    return removeArrayIndex(fieldName);
  }

  private cleanError(
    fieldName: string,
    errors: ValidationError[] = this.errors,
    path: string = '',
    index: string = '',
  ): void {
    if (isEmpty(index)) {
      index = getLastArrayIndex(fieldName);
    }

    if (fieldName.match(/\./) && !isEmpty(errors)) {
      let fieldNameArray = fieldName.split('.');
      let parentFieldName = this.parseFieldName(fieldNameArray.shift());
      let childFieldName = this.parseFieldName(fieldNameArray.join('.'));

      let foundError = errors.find(
        (error) => error.property === parentFieldName,
      );

      let foundErrorIndex = errors.findIndex(
        (error) => error.property === parentFieldName,
      );

      if (foundError !== undefined && foundError.children !== undefined) {
        path = `${path}[${foundErrorIndex}].children`;
        return this.cleanError(
          childFieldName,
          foundError.children,
          path,
          index,
        );
      }
    }

    if (path) {
      if (!isEmpty(index)) {
        set(
          this.errors,
          path,
          errors.filter((error) => {
            return error.property !== index;
          }),
        );
      } else {
        set(
          this.errors,
          path,
          errors.filter((error) => {
            return error.property !== fieldName;
          }),
        );
      }
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
    index?: string,
  ): ValidationError {
    if (isEmpty(index)) {
      index = getLastArrayIndex(fieldName);
    }

    if (fieldName.match(/\./) && !isEmpty(errors)) {
      let fieldNameArray = fieldName.split('.');
      let parentFieldName = this.parseFieldName(fieldNameArray.shift());
      let childFieldName = this.parseFieldName(fieldNameArray.join('.'));
      let foundError: any = errors.find(
        (error) => error.property === parentFieldName,
      );

      if (
        foundError !== undefined &&
        !isEmpty(foundError.children) &&
        this.validatingNestedFields.indexOf(fieldName) === -1
      ) {
        return this.getError(childFieldName, foundError.children, index);
      } else {
        this.validatingNestedFields = this.validatingNestedFields.filter(
          (item) => item !== fieldName,
        );

        return errors.find((error) => error.property === fieldName);
      }
    }

    if (!isEmpty(index)) {
      const childErrors = errors.find((error) => error.property === index)
        ?.children;
      return childErrors?.find((error) => error.property === fieldName) || null;
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
          resolve(get(this.dtoObject, fieldName));
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

  public emitErrorsChange(): void {
    const currentValue = this.errorsChange.getValue();
    this.errorsChange.next(!currentValue);
  }

  public getErrorsChange(): BehaviorSubject<Boolean> {
    return this.errorsChange;
  }

  public add(path: string, data: any = null): void {
    const foundNested = this.nested.find((item) => item.path === path);
    const nestedObject = get(this.dtoObject, path);

    if (isEmpty(foundNested)) {
      console.error(`The nested path ${path} doesn't exist.`);
      return;
    }

    if (!Array.isArray(nestedObject)) {
      console.error(`The nested dto in path ${path} is not an array.`);
      return;
    }

    let model = new foundNested.dtoClass();

    if (data) {
      model = { ...model, ...data };
    }

    nestedObject.push(model);
    set(this.dtoObject, path, nestedObject);

    this.emitChange();
  }

  public delete(path: string, index: number) {
    const foundNested = this.nested.find((item) => item.path === path);
    let nestedObject = get(this.dtoObject, path);

    if (isEmpty(foundNested)) {
      console.error(`The nested path ${path} doesn't exist.`);
      return;
    }

    if (!Array.isArray(nestedObject)) {
      console.error(`The nested dto in path ${path} is not an array.`);
      return;
    }

    nestedObject = nestedObject.filter(
      (item) => nestedObject.indexOf(item) !== index,
    );
    set(this.dtoObject, path, nestedObject);
    this.remapErrors(path, index);

    this.emitChange();
  }

  private remapErrors(path: string, index: number) {
    this.errors = this.errors
      .map((error) => {
        const lastIndex = +getLastArrayIndex(error.property);
        const fieldName = error.property.split('.').pop();

        if (lastIndex >= index) {
          const nextError = get(
            this.errors,
            `${path}[${index + 1}].${fieldName}`,
          );

          if (!isEmpty(nextError)) {
            return nextError;
          }
        }

        return error;
      })
      .filter((error) => {
        return !error.property.match(`${path}.[${index}]`);
      })
      .map((error) => {
        const lastIndex = +getLastArrayIndex(error.property);

        if (lastIndex >= index) {
          const n = error.property.lastIndexOf(`[${lastIndex}]`);
          error.property =
            error.property.slice(0, n) +
            error.property
              .slice(n)
              .replace(`[${lastIndex}]`, `[${lastIndex - 1}]`);
        }

        return error;
      });

    this.remapErrorsRecursive(path, index);
    this.emitErrorsChange();
  }

  private remapErrorsRecursive(
    fieldPath: string,
    index: number,
    path: string = '',
    errors: ValidationError[] = null,
  ) {
    let fieldPathArray = fieldPath.split('.');
    let parentFieldName = fieldPathArray.shift();
    let childFieldName = fieldPathArray.join('.');

    if (errors === null) {
      errors = this.errors;
    }

    let foundErrors = errors;
    errors = errors.find((error, i) => {
      if (error.property === parentFieldName) {
        path = path + `[${i}].children`;
        return true;
      }
    })?.children;

    if (isEmpty(errors)) {
      foundErrors = foundErrors
        .filter((error) => +error.property !== index)
        .map((error) => {
          if (+error.property > index) {
            error.property = String(+error.property - 1);
          }

          return error;
        });

      set(this.errors, path, foundErrors);
      return;
    }

    return this.remapErrorsRecursive(childFieldName, index, path, errors);
  }

  public reset(): void {
    this.cleanErrors();
    this.setSubmitted(false);
    this.resetDto();
    this.emitChange();
  }
}
