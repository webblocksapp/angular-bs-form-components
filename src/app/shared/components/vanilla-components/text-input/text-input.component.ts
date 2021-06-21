import { Component } from '@angular/core';
import { DataInputBase, parseValue } from '@webblocksapp/ng-data-groups';

@Component({
  selector: 'text-input',
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.css'],
})
export class TextInputComponent extends DataInputBase {
  bindFocusoutEvents(event: any): any {
    this.validateField();
    return event;
  }

  bindInputEvents(event: any): any {
    const value = parseValue(event.target.value);

    this.fillModel(value);
    return event;
  }
}
