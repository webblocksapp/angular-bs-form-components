import { Component } from '@angular/core';
import { BaseModelArray, SelectOption } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModelArray = new BaseModelArray(ExampleDto);
  public numberOfRecords = 1;
  public maxNumberOfRecords = 3;
  public Array = Array;

  public genders: SelectOption[] = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  public cities: SelectOption[] = [
    { value: 1, viewValue: 'City of México' },
    { value: 2, viewValue: 'Guadalajara' },
    { value: 3, viewValue: 'Tijuana' },
  ];

  public loading: boolean = true;

  async apiRequest(): Promise<ExampleDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            gender: 3,
            cities: [1, 3],
          },
          {
            gender: 1,
            cities: [2, 3],
          },
          {
            gender: 2,
            cities: [2],
          },
        ]);
      }, 3000);
    });
  }

  ngOnInit(): void {
    this.simulateApiRequest();
  }

  simulateApiRequest(): void {
    this.loading = true;
    this.exampleModel.reset();
    this.apiRequest()
      .then((data) => {
        this.exampleModel.fill(data);
        this.numberOfRecords = this.exampleModel.count();
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  addRecord(): void {
    if (this.numberOfRecords < this.maxNumberOfRecords) {
      this.exampleModel.add();
      this.numberOfRecords++;
    }
  }

  deleteRecord(index: number): void {
    if (this.numberOfRecords >= 2) {
      this.exampleModel.delete(index);
      this.numberOfRecords--;
    }
  }

  clear(index: number): void {
    this.exampleModel.reset(index);
  }
}
