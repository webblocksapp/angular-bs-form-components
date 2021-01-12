import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public theme =
    localStorage.getItem('theme') === 'default' ? 'bootstrap' : undefined;

  public Array = Array;
  public exampleModels: Array<BaseModel> = [new BaseModel(ExampleDto)];
  public numberOfRecords = 1;
  public maxNumberOfRecords = 3;

  public genders = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  addRecord(): void {
    if (this.numberOfRecords < this.maxNumberOfRecords) {
      const exampleModel = new BaseModel(ExampleDto);

      this.numberOfRecords++;
      this.exampleModels.push(exampleModel);
    }
  }

  deleteRecord(index: number): void {
    if (this.numberOfRecords >= 2) {
      this.exampleModels = this.exampleModels.filter(
        (bookModel) => this.exampleModels.indexOf(bookModel) !== index,
      );

      this.numberOfRecords--;
    }
  }
}
