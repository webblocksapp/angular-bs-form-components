import { Component } from '@angular/core';
import { BaseModelArray } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public Array = Array;
  public exampleModels: BaseModelArray = new BaseModelArray(ExampleDto);
  public numberOfRecords = 1;
  public maxNumberOfRecords = 3;

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  addRecord(): void {
    if (this.numberOfRecords < this.maxNumberOfRecords) {
      this.exampleModels.add();
      this.numberOfRecords++;
    }
  }

  deleteRecord(index: number): void {
    if (this.numberOfRecords >= 2) {
      this.exampleModels.delete(index);
      this.numberOfRecords--;
    }
  }
}
