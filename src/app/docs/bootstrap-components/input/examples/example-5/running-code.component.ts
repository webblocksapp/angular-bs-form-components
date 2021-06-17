import { Component, OnInit } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { UserDto } from './user.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent implements OnInit {
  public userModel: BaseModel = new BaseModel(UserDto);
  public loading: boolean = true;

  //Simulates an api request
  async getUser(): Promise<UserDto> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          firstName: 'Keanu',
          secondName: 'Charles',
          lastName: 'Reeves',
        });
      }, 3000);
    });
  }

  ngOnInit(): void {
    this.simulateGetUserRequest();
  }

  simulateGetUserRequest(): void {
    this.loading = true;
    this.userModel.reset();
    this.getUser()
      .then((data: UserDto) => {
        this.userModel.fill(data);
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }
}
