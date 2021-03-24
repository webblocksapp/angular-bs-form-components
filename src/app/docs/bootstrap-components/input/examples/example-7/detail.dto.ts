import { IsNotEmpty } from '@webblocksapp/class-validator';

export class DetailDto {
  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phoneNumber: string;
}
