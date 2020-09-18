import { Option } from './option.type';

export type OptionGroup = {
  group: string;
  groupValues: Array<Option>;
  value?: number | string;
  viewValue?: number | string;
  disabled?: boolean;
};
