import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { ExampleDto } from './example.dto';
import { DemoOptionsDto } from './demo-options/demo-options.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public theme =
    localStorage.getItem('theme') === 'default' ? 'bootstrap' : undefined;

  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public demoOptionsModel: BaseModel = new BaseModel(DemoOptionsDto);
  public demoOptions: DemoOptionsDto = this.demoOptionsModel.getDto();

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];
}
