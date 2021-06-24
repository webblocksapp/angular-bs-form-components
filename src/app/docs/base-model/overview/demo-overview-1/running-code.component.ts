import { Component } from '@angular/core';
import { BaseModel, ValidationResult } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public output: string;
  public isValid: boolean;

  private sampleData: ExampleDto = {
    email: 'test@mail.com',
    city: 2,
    favoriteFoods: [3, 1],
  };

  public cities = [
    { value: 1, viewValue: 'Bogotá' },
    { value: 2, viewValue: 'Medellín' },
    { value: 3, viewValue: 'Cartagena' },
    { value: 4, viewValue: 'Santander' },
  ];

  public favoriteFoods = [
    { value: 1, viewValue: 'Pizza' },
    { value: 2, viewValue: 'Ice cream' },
    { value: 3, viewValue: 'Hamburger' },
    { value: 4, viewValue: 'Hot dog' },
  ];

  public populate(): void {
    this.isValid = undefined;
    this.exampleModel.fill(this.sampleData);
  }

  public clear(): void {
    this.isValid = undefined;
    this.exampleModel.reset();
  }

  public submit(event): void {
    event.then((validationResult: ValidationResult) => {
      const { isValid, errors, validatedData } = validationResult;
      this.isValid = isValid;

      if (isValid) {
        //Send the data to backend
        this.output = JSON.stringify(validatedData, null, 2);
      } else {
        //(Optional) write your logic when data is invalid
        this.output = JSON.stringify(errors, null, 2);
      }
    });
  }
}
