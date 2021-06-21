import { IsNotEmpty, IsNumber } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNumber()
  @IsNotEmpty()
  city: number;
}
