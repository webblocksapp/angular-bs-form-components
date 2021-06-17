import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { SelectOption } from '@webblocksapp/ng-data-groups';
import { ExampleDto } from './example.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public exampleModel: BaseModel = new BaseModel(ExampleDto);

  public genders: SelectOption[] = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  public eventHTML: string = 'No event emitted';

  onShownEvent(event): void {
    this.eventHTML = `<b>shownEvent</b> emitted with value ${event.target.value}`;
  }

  onHiddenEvent(event): void {
    this.eventHTML = `<b>hiddenEvent</b> emitted with value ${event.target.value}`;
  }
}
