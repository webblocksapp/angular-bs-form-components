import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { UserDto } from '../common/dtos/user.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public userModel = new BaseModel(UserDto);

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];
}
