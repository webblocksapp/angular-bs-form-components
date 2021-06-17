import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);
  public eventHTML: string = 'No event emitted';

  onShowEvent(event): void {
    this.eventHTML = `<b>showEvent</b> emitted with value ${event.target.value}`;
  }

  onHideEvent(event): void {
    this.eventHTML = `<b>hideEvent</b> emitted with value ${event.target.value}`;
  }

  onClearDateEvent(event): void {
    this.eventHTML = `<b>clearDateEvent</b> emitted with value ${event.target.value}`;
  }

  onChangeDateEvent(event): void {
    this.eventHTML = `<b>changeDateEvent</b> emitted with value ${event.target.value}`;
  }

  onChangeMonthEvent(event): void {
    this.eventHTML = `<b>changeMonthEvent</b> emitted with value ${event.target.value}`;
  }

  onChangeYearEvent(event): void {
    this.eventHTML = `<b>changeYearEvent</b> emitted with value ${event.target.value}`;
  }

  onChangeDecadeEvent(event): void {
    this.eventHTML = `<b>changeDecadeEvent</b> emitted with value ${event.target.value}`;
  }

  onChangeCenturyEvent(event): void {
    this.eventHTML = `<b>changeCenturyEvent</b> emitted with value ${event.target.value}`;
  }
}
