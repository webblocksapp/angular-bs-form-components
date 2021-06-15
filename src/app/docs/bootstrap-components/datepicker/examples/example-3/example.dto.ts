import { IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNotEmpty()
  birthDate: string;
}
