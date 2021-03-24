import { IsNotEmpty, ValidateNested } from '@webblocksapp/class-validator';
import { GuestDto } from './guest.dto';

export class HostDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  secondName: string;

  @IsNotEmpty()
  lastName: string;

  @ValidateNested()
  guest: GuestDto;
}
