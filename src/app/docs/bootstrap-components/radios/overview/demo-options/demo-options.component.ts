import { Component, Input } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';

@Component({
  selector: 'demo-options',
  templateUrl: './demo-options.component.html',
})
export class DemoOptionsComponent {
  @Input() model: BaseModel;

  public demoOptions = {
    look: [
      { value: 'radio', viewValue: 'Radio' },
      { value: 'switch', viewValue: 'Switch' },
    ],
    display: [
      { value: 'default', viewValue: 'Default' },
      { value: 'inline', viewValue: 'Inline' },
    ],
    highlightOnValid: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    disabled: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
  };
}
