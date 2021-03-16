import { IsNotEmpty } from '@webblocksapp/class-validator';

export class GuestDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  secondName: string;

  @IsNotEmpty()
  lastName: string;
}
