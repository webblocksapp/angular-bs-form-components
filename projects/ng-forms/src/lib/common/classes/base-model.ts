import { validate, ValidationError } from '@webblocksapp/class-validator';
import { ValidatorOptions } from '@webblocksapp/class-validator';
import { BehaviorSubject } from 'rxjs';

export class BaseModel {
  private dtoObject: any;
  private errors: Array<ValidationError> = [];
  private map: Array<any> = [];
  private submitted: boolean = false;
  private resetTimes: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(DtoClass: any) {
    this.setDto(DtoClass);
  }

  private setDto(DtoClass: any): void {
    this.dtoObject = new DtoClass();
  }

  private incrementResetTimes(): void {
    const currentValue = this.resetTimes.getValue();
    this.resetTimes.next(currentValue + 1);
  }

  private resetDto(): void {
    const keys = Object.keys(this.dtoObject);
    keys.forEach((key) => {
      this.dtoObject[key] = null;
    });
  }

  public getResetTimes(): BehaviorSubject<number> {
    return this.resetTimes;
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

  public setSubmitted(flag: boolean): void {
    this.submitted = flag;
  }

  public getSubmitted(): boolean {
    return this.submitted;
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

  private resetMap(): void {
    this.map = [];
    this.initMap();
  }

  private setTouched(property: string = null, touched: boolean = true): void {
    if (property) {
      this.map.map((item) => {
        if (item.property === property) {
          item.touched = touched;
        }
      });
    } else {
      this.map.map((item) => {
        item.touched = touched;
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

  public reset(): void {
    this.cleanErrors();
    this.setSubmitted(false);
    this.resetDto();
    this.resetMap();
    this.incrementResetTimes();
  }
}
