import { Component, OnInit } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { UserDto } from '../common/dtos/user.dto';
import { Demo1OptionsDto } from './dtos/demo1-options.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent implements OnInit {
  public userModel = new BaseModel(UserDto);
  public demo1OptionsModel = new BaseModel(Demo1OptionsDto);

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  public demoOptions = [
    { value: 'radio', viewValue: 'Radio' },
    { value: 'switch', viewValue: 'Switch' },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.userModel.fill({ fullName: 'asdasdsa', gender: 1 });
      //this.demo1OptionsModel.fill({ radioMode: 'radio' });
    }, 3000);
  }
}
