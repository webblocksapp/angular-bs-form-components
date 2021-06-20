import { Component } from '@angular/core';
import { ValidationError } from '@webblocksapp/class-validator';
import { BaseModelArray } from '@webblocksapp/ng-data-groups';
import { BookDto } from './dtos/book.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public Array = Array;
  public numberOfBooks = 1;
  public maxNumberOfBooks = 3;
  public bookModels: BaseModelArray = new BaseModelArray(BookDto);
  public errors: Array<ValidationError> = null;
  public validatedData: BookDto = null;
  public JSON = JSON;

  addBook(): void {
    if (this.numberOfBooks < this.maxNumberOfBooks) {
      this.bookModels.add();
      this.numberOfBooks++;
    }
  }

  deleteBook(index: number): void {
    if (this.numberOfBooks >= 2) {
      this.bookModels.delete(index);
      this.numberOfBooks--;
    }
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
