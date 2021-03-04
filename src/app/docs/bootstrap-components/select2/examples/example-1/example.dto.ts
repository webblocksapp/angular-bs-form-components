import { IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNotEmpty()
  gender: number;

  @IsNotEmpty()
  city: number;

  @IsNotEmpty()
  fruit: number;
}
