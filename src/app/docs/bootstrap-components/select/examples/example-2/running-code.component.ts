import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { SelectOptionGroup } from '@webblocksapp/ng-forms';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);

  public items: SelectOptionGroup[] = [
    {
      group: 'Genders',
      groupValues: [
        { value: 1, viewValue: 'Male' },
        { value: 2, viewValue: 'Female' },
        { value: 3, viewValue: 'Other' },
      ],
    },
    {
      group: 'Cities',
      groupValues: [
        { value: 4, viewValue: 'New York' },
        { value: 5, viewValue: 'Lima' },
        { value: 6, viewValue: 'Bogotá' },
      ],
    },
    {
      group: 'Genders',
      groupValues: [
        { value: 7, viewValue: 'Apple' },
        { value: 8, viewValue: 'Banana' },
        { value: 9, viewValue: 'Orange' },
      ],
    },
  ];
}
