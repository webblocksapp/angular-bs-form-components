import { IsEmail, IsNotEmpty } from '@webblocksapp/class-validator';
import { scenario2 } from './groups';

export class spouseDto {
  @IsNotEmpty({ groups: scenario2 })
  fullName: string;

  @IsEmail({}, { groups: scenario2 })
  @IsNotEmpty({ groups: scenario2 })
  email: string;
}
