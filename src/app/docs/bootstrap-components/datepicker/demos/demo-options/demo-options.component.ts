import { Component, Input } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';

@Component({
  selector: 'demo-options',
  templateUrl: './demo-options.component.html',
})
export class DemoOptionsComponent {
  @Input() model: BaseModel;

  public demoOptions = {
    highlightOnValid: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    clearBtn: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    size: [
      { value: 'default', viewValue: 'Default' },
      { value: 'large', viewValue: 'Large' },
      { value: 'small', viewValue: 'Small' },
    ],
    autoclose: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    calendarWeeks: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    daysOfWeekDisabled: [
      { value: 0, viewValue: 'Sunday' },
      { value: 1, viewValue: 'Monday' },
      { value: 2, viewValue: 'Tuesday' },
      { value: 3, viewValue: 'Wednesday' },
      { value: 4, viewValue: 'Thursday' },
      { value: 5, viewValue: 'Friday' },
      { value: 6, viewValue: 'Saturday' },
    ],
    daysOfWeekHighlighted: [
      { value: 0, viewValue: 'Sunday' },
      { value: 1, viewValue: 'Monday' },
      { value: 2, viewValue: 'Tuesday' },
      { value: 3, viewValue: 'Wednesday' },
      { value: 4, viewValue: 'Thursday' },
      { value: 5, viewValue: 'Friday' },
      { value: 6, viewValue: 'Saturday' },
    ],
    enableOnReadonly: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    readonly: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    disabled: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    format: [
      { value: 'yyyy-mm-dd', viewValue: 'yyyy-mm-dd' },
      { value: 'mm', viewValue: 'mm' },
      { value: 'dd', viewValue: 'dd' },
    ],
    immediateUpdates: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    maxViewMode: [
      { value: 'days', viewValue: 'Days' },
      { value: 'months', viewValue: 'Months' },
      { value: 'years', viewValue: 'Years' },
      { value: 'centuries', viewValue: 'Centuries' },
    ],
  };
}
