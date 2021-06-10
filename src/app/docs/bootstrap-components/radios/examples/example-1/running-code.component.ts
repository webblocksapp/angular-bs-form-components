import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public demoOptionsModel: BaseModel = new BaseModel(ExampleDto);
  public demoOptions: ExampleDto = this.demoOptionsModel.getDto();

  public favoriteFoods = [
    { value: 1, viewValue: 'Pizza' },
    { value: 2, viewValue: 'Hamburger' },
    { value: 3, viewValue: 'Ice cream' },
    { value: 4, viewValue: 'Chinese rice' },
  ];

  public eventHTML: string = 'No event emitted';

  onChangeEvent(event): void {
    this.eventHTML = `<b>changeEvent</b> emitted with value ${event.target.value}`;
  }

  onClickEvent(event): void {
    this.eventHTML = `<b>clickEvent</b> emitted with value ${event.target.value}`;
  }
}
