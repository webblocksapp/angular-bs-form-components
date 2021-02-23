import { IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  secondName: string;

  @IsNotEmpty()
  lastName: string;
}
