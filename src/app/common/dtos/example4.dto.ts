import { IsNotEmpty } from '@webblocksapp/class-validator';

export class Example4Dto {
  @IsNotEmpty()
  icon: any;
}
