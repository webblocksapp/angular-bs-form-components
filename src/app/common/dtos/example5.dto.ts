import { IsNotEmpty } from '@webblocksapp/class-validator';

export class Example5Dto {
  @IsNotEmpty()
  date: any;
}
