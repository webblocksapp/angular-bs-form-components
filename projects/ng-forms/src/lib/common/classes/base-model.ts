import { validate, ValidationError } from '@webblocksapp/class-validator';
import { ValidatorOptions } from '@webblocksapp/class-validator';

export class BaseModel {
  private dtoObject: any;
  private errors: Array<ValidationError> = [];
  private map: Array<any> = [];

  constructor(DtoClass: any) {
    this.setDto(DtoClass);
  }

  private setDto(DtoClass: any): void {
    this.dtoObject = new DtoClass();
  }

  public getDto(): any {
    return this.dtoObject;
  }

  public setValue(key: string, value: any): void {
    this.dtoObject[key] = value || null;
  }

  public getValue(key: string): any {
    return this.dtoObject[key];
  }

  private setErrors(errors: Array<ValidationError>): void {
    this.errors = Object.assign(this.errors, errors);
  }

  public initMap(): void {
    const keys = Object.keys(this.dtoObject);

    keys.forEach((key) => {
      const filteredMap = this.map.filter((item) => item.property === key);

      if (filteredMap.length === 0) {
        this.map.push({ property: key, touched: false });
      }
    });
  }

  private setTouched(property: string = null): void {
    if (property) {
      this.map.map((item) => {
        if (item.property === property) {
          item.touched = true;
        }
      });
    } else {
      this.map.map((item) => {
        item.touched = true;
      });
    }
  }

  private cleanError(fieldName: string): void {
    this.errors = this.errors.filter((error) => error.property !== fieldName);
  }

  private cleanErrors(): void {
    this.errors = [];
  }

  public getErrors(): Array<ValidationError> {
    return this.errors;
  }

  public getMap(): Array<any> {
    return this.map;
  }

  public getPropertyMap(property): any {
    const filteredMap = this.map.filter((item) => item.property === property);

    if (filteredMap.length > 0) {
      return filteredMap[0];
    }

    return null;
  }

  public fill(data: any): void {
    const objectKeys = Object.keys(data);

    objectKeys.forEach((key) => {
      const value = data[key];
      this.setValue(key, value);
    });
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
        }

        if (errors.length > 0) {
          this.setErrors(errors);
          resolve({ isValid: false, validatedData: null, errors });
        }

        this.setTouched();
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

        if (errors.length > 0) {
          this.setErrors(errors);
          reject(errors);
        }

        this.setTouched(fieldName);
      });
    });
  }
}
