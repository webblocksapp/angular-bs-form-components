import { Component } from '@angular/core';
import { ValidationError } from '@webblocksapp/class-validator';
import { BaseModel } from '@webblocksapp/ng-data-groups';
import { PersonDto } from './dtos/person.dto';
import { spouseDto } from './dtos/spouse.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public errors: Array<ValidationError> = null;
  public validatedData: PersonDto = null;
  public JSON = JSON;
  public groups: string[] = ['default'];

  public personModel: BaseModel = new BaseModel(PersonDto, {
    nested: [{ path: 'spouse', dtoClass: spouseDto }],
  });

  public isMarriedOptions = [
    { value: 'yes', viewValue: 'Yes' },
    { value: 'no', viewValue: 'No' },
  ];

  public isAdultOptions = [
    { value: 'yes', viewValue: 'Yes' },
    { value: 'no', viewValue: 'No' },
  ];

  public setGroup(): void {
    this.groups = ['default'];
    const { isMarried, isAdult }: PersonDto = this.personModel.getDto();
    if (isMarried === 'yes') this.groups.push('isMarried');
    if (isAdult === 'yes') this.groups.push('isAdult');
  }

  onSubmit(event): void {
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
