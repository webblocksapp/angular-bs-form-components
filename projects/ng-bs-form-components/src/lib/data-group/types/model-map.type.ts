import { BaseModel } from '@webblocksapp/class-validator';
import { InputDataComponent } from './input-data-component.type';

export type ModelMap = {
  model: BaseModel;
  inputDataComponents: InputDataComponent[];
};
