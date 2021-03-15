import { IsNotEmpty } from '@webblocksapp/class-validator';

export class UserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  secondName: string;

  @IsNotEmpty()
  lastName: string;
}
