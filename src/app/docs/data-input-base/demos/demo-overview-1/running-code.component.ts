import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  private sampleData: ExampleDto = {
    email: 'test@mail.com',
    nickName: 'Allie',
  };

  populate() {
    this.exampleModel.fill(this.sampleData);
  }

  clear() {
    this.exampleModel.reset();
  }
}
