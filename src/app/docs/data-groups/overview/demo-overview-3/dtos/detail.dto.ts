import { IsNotEmpty, ArrayMinSize } from '@webblocksapp/class-validator';

export class DetailDto {
  @IsNotEmpty()
  documentNumber: number;

  @IsNotEmpty()
  city: number;

  @IsNotEmpty()
  expeditionDate: string;

  @IsNotEmpty()
  documentType: number;

  @ArrayMinSize(1)
  expectations: Array<number>;
}
