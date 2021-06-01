import {
  IsNotEmpty,
  ArrayMinSize,
  IsArray,
} from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNotEmpty()
  gender: number;

  @ArrayMinSize(1)
  @IsArray()
  cities: number[];
}
