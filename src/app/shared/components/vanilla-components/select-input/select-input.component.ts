import { Component, Input } from '@angular/core';
import { DataInputBase, parseValue } from '@webblocksapp/ng-data-groups';

@Component({
  selector: 'select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
})
export class SelectInputComponent extends DataInputBase {
  @Input() options: { value: any; viewValue: any }[];

  bindChangeEvents(event: any): any {
    const value = parseValue(event.target.value);
    this.fillModel(value);
    this.validateField();

    return event;
  }
}
