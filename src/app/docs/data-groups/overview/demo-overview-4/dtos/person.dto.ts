import {
  IsEmail,
  IsNotEmpty,
  ValidateNested,
} from '@webblocksapp/class-validator';

import { scenario1, scenario2, scenario3 } from './groups';

export class PersonDto {
  @IsNotEmpty({ groups: scenario1 })
  fullName: string;

  @IsEmail({}, { groups: scenario1 })
  @IsNotEmpty({ groups: scenario1 })
  email: string;

  @IsNotEmpty({ groups: scenario1 })
  isMarried: string;

  @ValidateNested({ groups: scenario2 })
  spouse: number;

  @IsNotEmpty({ groups: scenario1 })
  isAdult: string;

  @IsNotEmpty({ groups: scenario3 })
  phoneNumber: number;
}
