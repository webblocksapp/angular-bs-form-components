import { SelectOption } from '../types';

const mapSelectOptions = (
  options: Array<any>,
  map: Array<string>,
): SelectOption[] => {
  const mappedOptions: SelectOption[] = [];
  const [value, viewValue, disabled] = map;

  options.forEach((item) => {
    const obj: SelectOption = { value: null, viewValue: null };
    obj.value = item[value];
    obj.viewValue = item[viewValue];

    if (disabled !== undefined) obj.disabled = !item[disabled];
    mappedOptions.push(obj);
  });

  return mappedOptions;
};

export { mapSelectOptions };
