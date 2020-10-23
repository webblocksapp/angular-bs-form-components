import { IsEmail, IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto1 {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
