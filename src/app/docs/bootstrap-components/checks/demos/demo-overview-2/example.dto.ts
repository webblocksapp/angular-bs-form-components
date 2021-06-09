import { ArrayMinSize } from '@webblocksapp/class-validator';

export class ExampleDto {
  @ArrayMinSize(1)
  favoriteFoods: Array<number>;
}
