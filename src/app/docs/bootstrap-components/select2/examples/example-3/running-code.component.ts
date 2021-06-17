import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { SelectOption } from '@webblocksapp/ng-bs4-form-components';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public eventHTML: string;

  public items: SelectOption[] = [
    { value: 1, viewValue: 'City of México' },
    { value: 2, viewValue: 'Guadalajara' },
    { value: 3, viewValue: 'Tijuana' },
  ];

  onSelectEvent(event) {
    this.eventHTML = `<b>selectEvent</b> emitted with value ${event?.text}`;
  }

  onClearEvent(event) {
    this.eventHTML = `<b>clearEvent</b> emitted with value ${event?.text}`;
  }

  onCloseEvent(event) {
    this.eventHTML = `<b>closeEvent</b> emitted with value ${event?.text}`;
  }
}
