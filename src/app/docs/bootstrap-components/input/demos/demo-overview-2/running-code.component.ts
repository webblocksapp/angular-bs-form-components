import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { ExampleDto } from './example.dto';
import { DemoOptionsDto } from './demo-options/demo-options.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public Array = Array;
  public userModels: Array<BaseModel> = [new BaseModel(ExampleDto)];
  public numberOfRecords = 1;
  public maxNumberOfRecords = 3;
  public demoOptionsModel: BaseModel = new BaseModel(DemoOptionsDto);
  public demoOptions: DemoOptionsDto = this.demoOptionsModel.getDto();

  addUser(): void {
    if (this.numberOfRecords < this.maxNumberOfRecords) {
      const userModel = new BaseModel(ExampleDto);

      this.numberOfRecords++;
      this.userModels.push(userModel);
    }
  }

  deleteUser(index: number): void {
    if (this.numberOfRecords >= 2) {
      this.userModels = this.userModels.filter(
        (bookModel) => this.userModels.indexOf(bookModel) !== index,
      );

      this.numberOfRecords--;
    }
  }
}
