import { IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNotEmpty()
  city: number;
}
