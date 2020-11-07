import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { UserDto } from './user.dto';
import { DemoOptionsDto } from './demo-options/demo-options.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public isSwitch = false;
  public userModel: BaseModel = new BaseModel(UserDto);
  public demoOptionsModel: BaseModel = new BaseModel(DemoOptionsDto);
  public demoOptions: DemoOptionsDto = this.demoOptionsModel.getDto();

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];
}
