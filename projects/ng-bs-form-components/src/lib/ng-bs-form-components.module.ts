import { NgModule } from '@angular/core';
import { BsInputModule } from './bs-input/bs-input.module';
import { DataGroupsModule } from './data-group/data-groups.module';

@NgModule({
  declarations: [],
  imports: [BsInputModule, DataGroupsModule],
  exports: [BsInputModule, DataGroupsModule],
})
export class NgBsFormComponentsModule {}
