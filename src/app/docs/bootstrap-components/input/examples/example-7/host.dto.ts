import { IsNotEmpty, ValidateNested } from '@webblocksapp/class-validator';

export class HostDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  secondName: string;

  @IsNotEmpty()
  lastName: string;

  @ValidateNested()
  guest: HostDto;
}
