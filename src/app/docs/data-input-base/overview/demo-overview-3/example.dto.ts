import { ArrayMinSize, IsArray, IsNumber } from '@webblocksapp/class-validator';

export class ExampleDto {
  @ArrayMinSize(2)
  @IsArray()
  fruits: number[];

  @IsNumber({}, { each: true })
  @ArrayMinSize(1)
  @IsArray()
  cities: number[];
}
