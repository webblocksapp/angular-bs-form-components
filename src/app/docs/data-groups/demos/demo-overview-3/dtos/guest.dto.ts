import {
  IsNotEmpty,
  ValidateNested,
  ArrayMinSize,
} from '@webblocksapp/class-validator';
import { DetailDto } from './detail.dto';

export class GuestDto {
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
  detail: DetailDto[];
}
