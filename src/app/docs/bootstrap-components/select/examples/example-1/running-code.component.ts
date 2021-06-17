import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  public cities = [
    { value: 1, viewValue: 'New York' },
    { value: 2, viewValue: 'Lima' },
    { value: 3, viewValue: 'Bogotá' },
  ];

  public fruits = [
    { value: 1, viewValue: 'Apple' },
    { value: 2, viewValue: 'Banana' },
    { value: 3, viewValue: 'Orange' },
  ];
}
