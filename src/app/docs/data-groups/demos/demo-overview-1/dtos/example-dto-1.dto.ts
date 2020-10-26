import {
  ArrayMinSize,
  IsEmail,
  IsNotEmpty,
} from '@webblocksapp/class-validator';

export class ExampleDto1 {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  birthDate: string;

  @IsNotEmpty()
  gender: number;

  @IsNotEmpty()
  birthCity: number;

  @ArrayMinSize(1)
  favoriteFoods: Array<number>;
}
