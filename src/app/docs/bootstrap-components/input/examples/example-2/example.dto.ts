import {
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from '@webblocksapp/class-validator';

export class ExampleDto {
  @MaxLength(12)
  @MinLength(6)
  @Matches(/.*[\@\-\=\.\,\;\:].*/i, {
    message: 'Password must contain at least one special character.',
  })
  @Matches(/.*[A-Za-z].*/i, {
    message: 'Password must contain at least one letter.',
  })
  @Matches(/.*[0-9].*/i, {
    message: 'Password must contain at least one number.',
  })
  @IsNotEmpty()
  password: string;
}
