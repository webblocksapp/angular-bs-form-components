import { IsEmail, IsNotEmpty, IsString } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nickName: string;
}
