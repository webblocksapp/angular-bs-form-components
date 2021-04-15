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
  public loading: boolean = false;

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

  async simulateGetHostsRequest(): Promise<void> {
    this.loading = true;
    await new Promise((resolve) => setTimeout(resolve, 100));
    const hosts: HostDto[] = [
      {
        firstName: 'Keanu',
        secondName: 'Charles',
        lastName: 'Reeves',
        guest: {
          name: 'Will Smith',
          age: 52,
          detail: [
            {
              address: 'Street 123 # 456',
              phoneNumber: '+1 123456',
            },
            {
              address: 'Street 20 # 32',
              phoneNumber: '+1 3332323',
            },
          ],
        },
      },
      {
        firstName: 'James',
        secondName: 'Eugene',
        lastName: 'Carrey',
        guest: {
          name: 'Amaranta Davis',
          age: 25,
          detail: [
            {
              address: 'Street 90 # 22',
              phoneNumber: '+1 5442323',
            },
            {
              address: 'Street 11 # 27',
              phoneNumber: '+1 2323223',
            },
            {
              address: 'Street 56 # 11',
              phoneNumber: '+1 9922932',
            },
          ],
        },
      },
    ];

    this.userModels.fill(hosts);
    this.numberOfUsers = this.userModels.get().length;
    this.numberOfDetails = [];
    this.userModels.get().forEach((userModel) => {
      this.numberOfDetails.push(
        userModel.getValue('guest.detail')?.length || 1,
      );
    });

    this.loading = false;
  }
}
