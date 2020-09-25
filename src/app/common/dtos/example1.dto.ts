import { IsNotEmpty } from '@webblocksapp/class-validator';

export class Example1Dto {
  @IsNotEmpty()
  test: string;
}
