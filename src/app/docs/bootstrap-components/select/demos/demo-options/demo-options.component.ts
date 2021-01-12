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
    liveSearch: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
  };
}
