import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { UserDto } from '../common/dtos/user.dto';
import { Demo1OptionsDto } from './dtos/demo1-options.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public isSwitch = false;
  public userModel: BaseModel = new BaseModel(UserDto);
  public demo1OptionsModel: BaseModel = new BaseModel(Demo1OptionsDto);
  public demo1Options: Demo1OptionsDto = this.demo1OptionsModel.getDto();

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  public demoOptions = [
    { value: 'radio', viewValue: 'Radio' },
    { value: 'switch', viewValue: 'Switch' },
  ];
}
