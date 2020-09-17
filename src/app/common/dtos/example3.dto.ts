import { IsNotEmpty } from '@webblocksapp/class-validator';

export class Example3Dto {
  @IsNotEmpty()
  country: string;
}
