import { IsNotEmpty } from '@webblocksapp/class-validator';

export class Example2Dto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  text: string;
}
