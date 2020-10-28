import { IsNotEmpty } from '@webblocksapp/class-validator';

export class BookDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  editorial: string;

  @IsNotEmpty()
  printDate: string;
}
