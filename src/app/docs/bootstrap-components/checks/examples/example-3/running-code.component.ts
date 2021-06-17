import { Component } from '@angular/core';
import { BaseModelArray } from '@webblocksapp/ng-data-groups';
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

  public favoriteFoods = [
    { value: 1, viewValue: 'Pizza' },
    { value: 2, viewValue: 'Hamburger' },
    { value: 3, viewValue: 'Ice cream' },
    { value: 4, viewValue: 'Chinese rice' },
  ];

  public loading: boolean = true;

  async apiRequest(): Promise<ExampleDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            favoriteFoods: [1, 3],
          },
          {
            favoriteFoods: [2, 3],
          },
          {
            favoriteFoods: [2],
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
