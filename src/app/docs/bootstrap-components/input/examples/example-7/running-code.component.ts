import { Component } from '@angular/core';
import { BaseModelArray } from '@webblocksapp/ng-forms';
import { DetailDto } from './detail.dto';
import { GuestDto } from './guest.dto';
import { HostDto } from './host.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public Array = Array;
  public userModels: BaseModelArray = new BaseModelArray(HostDto, {
    nested: [
      { path: 'guest', dtoClass: GuestDto },
      { path: 'guest.detail', dtoClass: DetailDto, multiple: true },
    ],
  });
  public maxNumberOfUsers: number = 3;
  public numberOfUsers: number = 1;
  public maxNumberOfDetails: number = 3;
  public numberOfDetails: number[] = [1];

  addUser(): void {
    this.userModels.add();
    this.numberOfUsers++;
    this.handleNumberOfDetails('add');
  }

  deleteUser(index: number): void {
    this.userModels.delete(index);
    this.numberOfUsers--;
    this.handleNumberOfDetails('delete', index);
  }

  addDetail(parentIndex: number): void {
    this.userModels.find(parentIndex).add('guest.detail');
    this.numberOfDetails[parentIndex]++;
  }

  deleteDetail(parentIndex: number, index: number): void {
    this.userModels.find(parentIndex).delete(`guest.detail`, index);
    this.numberOfDetails[parentIndex]--;
  }

  handleNumberOfDetails(action: string, parentIndex?: number) {
    if (action === 'add') {
      this.numberOfDetails.push(1);
    }

    if (action === 'delete') {
      this.numberOfDetails = this.numberOfDetails.filter(
        (item, index) => index !== parentIndex,
      );
    }
  }
}
