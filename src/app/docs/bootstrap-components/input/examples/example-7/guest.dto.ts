import { IsNotEmpty, ValidateNested } from '@webblocksapp/class-validator';
import { DetailDto } from './detail.dto';

export class GuestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @ValidateNested()
  detail: DetailDto;
}
