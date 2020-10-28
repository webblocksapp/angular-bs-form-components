import { Component } from '@angular/core';
import { BaseModel } from '@webblocksapp/ng-forms';
import { BookDto } from './dtos/book.dto';

@Component({
  selector: 'running-code',
  templateUrl: './running-code.component.html',
})
export class RunningCodeComponent {
  public Array = Array;
  public numberOfBooks = 1;
  public maxNumberOfBooks = 3;
  public bookModels: Array<BaseModel> = [new BaseModel(BookDto)];

  addBook(): void {
    if (this.numberOfBooks < this.maxNumberOfBooks) {
      const bookModel = new BaseModel(BookDto);

      this.numberOfBooks++;
      this.bookModels.push(bookModel);
    }
  }

  deleteBook(index: number): void {
    if (this.numberOfBooks >= 2) {
      this.bookModels = this.bookModels.filter(
        (bookModel) => this.bookModels.indexOf(bookModel) !== index,
      );

      this.numberOfBooks--;
    }
  }
}
