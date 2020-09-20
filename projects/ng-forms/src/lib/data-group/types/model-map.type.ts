import { BaseModel } from '../../common/classes/base-model';
import { DataInputComponent } from './data-input-component.type';

export type ModelMap = {
  model: BaseModel;
  dataInputComponents: DataInputComponent[];
};
