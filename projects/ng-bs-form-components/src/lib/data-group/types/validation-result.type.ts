import { ValidationError } from '@webblocksapp/class-validator';

export type ValidationResult = {
  isValid: boolean;
  validatedData: any;
  errors: ValidationError[];
};
