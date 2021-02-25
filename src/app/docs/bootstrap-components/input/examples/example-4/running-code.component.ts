import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public eventHTML: string = 'No event emitted';

  onInputEvent(event): void {
    this.eventHTML = `<b>inputEvent</b> emitted with value ${event.target.value}`;
  }

  onFocusoutEvent(event): void {
    this.eventHTML = `<b>focusoutEvent</b> emitted with value ${event.target.value}`;
  }

  onFocusEvent(event): void {
    this.eventHTML = `<b>focusEvent</b> emitted with value ${event.target.value}`;
  }
}
