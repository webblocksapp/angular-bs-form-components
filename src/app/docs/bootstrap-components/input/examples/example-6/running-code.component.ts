import { Component, OnInit } from '@angular/core';
import { BaseModelArray } from '@webblocksapp/ng-forms';
import { UserDto } from './user.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent implements OnInit {
  public Array = Array;
  public userModels: BaseModelArray = new BaseModelArray(UserDto);
  public loading: boolean = true;
  public numberOfRecords = 1;
  public maxNumberOfRecords = 3;

  //Simulates an api request
  async getUser(): Promise<UserDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            firstName: 'Keanu',
            secondName: 'Charles',
            lastName: 'Reeves',
          },
          {
            firstName: 'James',
            secondName: 'Eugene',
            lastName: 'Carrey',
          },
          {
            firstName: 'John',
            secondName: 'Christopher',
            lastName: 'Depp II',
          },
        ]);
      }, 3000);
    });
  }

  ngOnInit(): void {
    this.simulateGetUserRequest();
  }

  simulateGetUserRequest(): void {
    this.loading = true;
    this.getUser()
      .then((data: UserDto[]) => {
        this.userModels.fill(data);
        this.numberOfRecords = this.userModels.count();
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  addRecord(): void {
    if (this.numberOfRecords < this.maxNumberOfRecords) {
      this.userModels.add();
      this.numberOfRecords++;
    }
  }

  deleteRecord(index: number): void {
    if (this.numberOfRecords >= 2) {
      this.userModels.delete(index);
      this.numberOfRecords--;
    }
  }

  clear(index: number): void {
    this.userModels.find(index).reset();
  }
}
