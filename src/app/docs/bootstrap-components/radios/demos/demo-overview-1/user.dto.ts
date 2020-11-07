import { IsNotEmpty } from '@webblocksapp/class-validator';

export class UserDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  gender: number;
}
