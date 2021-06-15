import { IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNotEmpty()
  birthDate1: string;

  @IsNotEmpty()
  birthDate2: string;

  @IsNotEmpty()
  birthDate3: string;
}
