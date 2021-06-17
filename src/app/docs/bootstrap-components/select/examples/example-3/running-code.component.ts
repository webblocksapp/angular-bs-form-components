import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { SelectOptionGroup } from '@webblocksapp/ng-data-groups';
import { ExampleOptionsDto } from './example-options/example-options.dto';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public exampleOptionsModel: BaseModel = new BaseModel(ExampleOptionsDto);
  public exampleOptions: ExampleOptionsDto = this.exampleOptionsModel.getDto();

  public items: SelectOptionGroup[] = [
    {
      group: 'México',
      groupValues: [
        { value: 1, viewValue: 'City of México' },
        { value: 2, viewValue: 'Guadalajara' },
        { value: 3, viewValue: 'Tijuana' },
      ],
    },
    {
      group: 'Colombia',
      groupValues: [
        { value: 4, viewValue: 'Bogotá' },
        { value: 5, viewValue: 'Medellín' },
        { value: 6, viewValue: 'Leticia' },
      ],
    },
    {
      group: 'United States',
      groupValues: [
        { value: 7, viewValue: 'Chicago' },
        { value: 8, viewValue: 'California' },
        { value: 9, viewValue: 'New York' },
      ],
    },
  ];
}
