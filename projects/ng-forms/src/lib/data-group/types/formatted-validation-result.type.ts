import { Error } from './error.type';

export type FormattedValidationResult = {
  isValid: boolean;
  validatedData?: any;
  errors: Error[];
};
