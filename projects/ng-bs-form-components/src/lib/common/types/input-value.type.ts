import * as tg from 'generic-type-guard';

type InputValue = {
  model: any;
  path: string;
};

const isInputValue: tg.TypeGuard<InputValue> = new tg.IsInterface()
  .withProperties({
    model: tg.isAny,
    path: tg.isString,
  })
  .get();

export { InputValue, isInputValue };
