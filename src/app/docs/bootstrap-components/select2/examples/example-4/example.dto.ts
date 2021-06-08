import {
  IsNotEmpty,
  ArrayMinSize,
  IsArray,
} from '@webblocksapp/class-validator';

export class ExampleDto {
  @ArrayMinSize(1)
  @IsArray()
  cities: number[];

  @IsNotEmpty()
  gender: number;
}
