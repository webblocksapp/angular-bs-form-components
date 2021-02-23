import { IsEmail, IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
