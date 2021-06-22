import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  private sampleData: ExampleDto = {
    fruits: [1, 5, 6],
    cities: [2, 3],
  };

  public fruits = [
    { value: 1, viewValue: 'Banana' },
    { value: 2, viewValue: 'Apple' },
    { value: 3, viewValue: 'Grapes' },
    { value: 4, viewValue: 'Orange' },
    { value: 5, viewValue: 'Strawberry' },
    { value: 6, viewValue: 'Lemon' },
  ];

  public cities = [
    { value: 1, viewValue: 'Cali' },
    { value: 2, viewValue: 'Bogotá' },
    { value: 3, viewValue: 'Lima' },
    { value: 4, viewValue: 'Quito' },
    { value: 5, viewValue: 'Caracas' },
    { value: 6, viewValue: 'Buenos Aires' },
  ];

  populate() {
    this.exampleModel.fill(this.sampleData);
  }

  clear() {
    this.exampleModel.reset();
  }
}
