import { Component, Input } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';

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
  };
}
