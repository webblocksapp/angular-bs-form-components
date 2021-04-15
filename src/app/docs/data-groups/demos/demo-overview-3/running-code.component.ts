import { Component } from '@angular/core';
import { BaseModelArray, SelectOptionGroup } from '@webblocksapp/ng-forms';
import { DetailDto } from './dtos/detail.dto';
import { GuestDto } from './dtos/guest.dto';
import { HostDto } from './dtos/host.dto';

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
  public cities: SelectOptionGroup[] = [
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

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
  ];

  public favoriteFoods = [
    { value: 1, viewValue: 'Pizza' },
    { value: 2, viewValue: 'Hamburger' },
    { value: 3, viewValue: 'Ice cream' },
    { value: 4, viewValue: 'Chinese rice' },
  ];

  public documentTypes = [
    { value: 1, viewValue: 'CC' },
    { value: 2, viewValue: 'Passport' },
    { value: 3, viewValue: 'Visa' },
  ];

  public expectations = [
    { value: 1, viewValue: 'Travel through the world' },
    { value: 2, viewValue: 'Studying outside' },
    { value: 3, viewValue: 'Better life quality' },
  ];

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
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const hosts: HostDto[] = [
      {
        fullName: 'Keanu Charles Reeves',
        cityOfResidence: 1,
        birthDate: '1970-01-03',
        gender: 1,
        favoriteFoods: [1, 2],
        guest: {
          fullName: 'Will Smith',
          cityOfResidence: 2,
          birthDate: '1977-07-09',
          gender: 1,
          favoriteFoods: [2, 3],
          detail: [
            {
              documentNumber: 1221221,
              city: 2,
              expeditionDate: '1991-10-02',
              documentType: 2,
              expectations: [1, 2],
            },
            {
              documentNumber: 2232212,
              city: 1,
              expeditionDate: '1992-12-22',
              documentType: 1,
              expectations: [1],
            },
          ],
        },
      },
      {
        fullName: 'Jim Eugene Carrey',
        cityOfResidence: 3,
        birthDate: '1965-02-21',
        gender: 1,
        favoriteFoods: [1, 2, 3],
        guest: {
          fullName: 'Amaranta Davis',
          cityOfResidence: 6,
          birthDate: '1982-04-25',
          gender: 2,
          favoriteFoods: [1, 4],
          detail: [
            {
              documentNumber: 1232212,
              city: 2,
              expeditionDate: '2000-09-06',
              documentType: 1,
              expectations: [1, 2],
            },
            {
              documentNumber: 2232212,
              city: 1,
              expeditionDate: '2000-12-11',
              documentType: 2,
              expectations: [1],
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
