import { Component } from '@angular/core';
import { ValidationError } from '@webblocksapp/class-validator';
import { BaseModel } from '@webblocksapp/ng-forms';
import { ExampleDto1 } from './dtos/example-dto-1.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public ExampleModel1 = new BaseModel(ExampleDto1);
  public errors: Array<ValidationError> = null;
  public validatedData: ExampleDto1 = null;
  public JSON = JSON;

  onSubmit(event) {
    event.then((validationResult) => {
      const { isValid, validatedData, errors } = validationResult;

      if (isValid) {
        /**
         * Write your code to send validated data to backend
         */
        this.validatedData = validatedData;
        this.errors = null;
      } else {
        /**
         * Write your code to show an additional alert if data contains errors
         */
        this.validatedData = null;
        this.errors = errors;
      }
    });
  }
}
