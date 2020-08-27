import { NgModule } from '@angular/core';
import { BsInputModule } from './bs-input/bs-input.module';
import { DataGroupModule } from './data-group/data-group.module';

@NgModule({
  declarations: [],
  imports: [BsInputModule, DataGroupModule],
  exports: [BsInputModule, DataGroupModule],
})
export class NgBsFormComponentsModule {}
