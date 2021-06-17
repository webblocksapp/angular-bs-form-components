import { Component, Input } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-data-groups';

@Component({
  selector: 'example-options',
  templateUrl: './example-options.component.html',
})
export class ExampleOptionsComponent {
  @Input() model: BaseModel;

  public demoOptions = {
    liveSearch: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
    selectedTextFormat: [
      { value: 'values', viewValue: 'values' },
      { value: 'count', viewValue: 'count' },
      { value: 'count > 2', viewValue: 'count > 2' },
      { value: 'static', viewValue: 'static' },
    ],
    actionsBox: [
      { value: 'yes', viewValue: 'Yes' },
      { value: 'no', viewValue: 'No' },
    ],
  };
}
