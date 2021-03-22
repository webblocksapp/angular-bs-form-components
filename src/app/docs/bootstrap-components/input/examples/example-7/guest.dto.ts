import { IsNotEmpty } from '@webblocksapp/class-validator';

export class GuestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;
}
