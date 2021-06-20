import {
  IsNotEmpty,
  ValidateNested,
  ArrayMinSize,
} from '@webblocksapp/class-validator';
import { GuestDto } from './guest.dto';

export class HostDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  cityOfResidence: number;

  @IsNotEmpty()
  birthDate: string;

  @IsNotEmpty()
  gender: number;

  @ArrayMinSize(1)
  favoriteFoods: Array<number>;

  @ValidateNested()
  guest: GuestDto;
}
