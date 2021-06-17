import { Component } from '@angular/core';
import { ValidationError } from '@webblocksapp/class-validator';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { ExampleDto1 } from './dtos/example-dto-1.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public errors: Array<ValidationError> = null;
  public validatedData: ExampleDto1 = null;
  public JSON = JSON;

  public exampleModel1: BaseModel = new BaseModel(ExampleDto1);

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
  ];

  public cities = [
    { value: 1, viewValue: 'New York' },
    { value: 2, viewValue: 'City of Mexico' },
    { value: 3, viewValue: 'Quito' },
    { value: 4, viewValue: 'Bogota' },
  ];

  public favoriteFoods = [
    { value: 1, viewValue: 'Pizza' },
    { value: 2, viewValue: 'Hamburger' },
    { value: 3, viewValue: 'Ice cream' },
    { value: 4, viewValue: 'Chinese rice' },
  ];

  onSubmit(event): void {
    event.then((validationResult) => {
      const { isValid, validatedData, errors } = validationResult;

      if (isValid) {
        /**
         * Write your code to send validated data to backend
         */
        this.validatedData = validatedData;
        this.errors = null;
      } else {
        /**
         * Write your code to show an additional alert if data contains errors
         */
        this.validatedData = null;
        this.errors = errors;
      }
    });
  }
}
