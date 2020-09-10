import { BaseModel } from '@webblocksapp/class-validator';
import { DataInputComponent } from './data-input-component.type';

export type ModelMap = {
  model: BaseModel;
  dataInputComponents: DataInputComponent[];
};
