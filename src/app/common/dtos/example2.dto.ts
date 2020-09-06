import { IsNotEmpty } from '@webblocksapp/class-validator';

export class Example2Dto {
  @IsNotEmpty({ groups: ['default'] })
  title: string;

  @IsNotEmpty({ groups: ['default', 'only-text'] })
  text: string;
}
