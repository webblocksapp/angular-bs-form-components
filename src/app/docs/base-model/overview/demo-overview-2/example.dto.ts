import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  ArrayMinSize,
} from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  city: number;

  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  favoriteFoods: number[];
}
