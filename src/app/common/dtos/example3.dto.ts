import {
  IsArray,
  IsNotEmpty,
  ArrayMinSize,
} from '@webblocksapp/class-validator';

export class Example3Dto {
  @IsNotEmpty()
  country: number;

  @IsNotEmpty()
  city: number;

  @ArrayMinSize(1)
  @IsArray()
  cities: Array<number>;
}
