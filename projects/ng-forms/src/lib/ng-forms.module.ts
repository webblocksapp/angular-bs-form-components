import { NgModule } from '@angular/core';
import { BsInputModule } from './bs-input/bs-input.module';
import { DataGroupsModule } from './data-group/data-groups.module';
import { BsSelect2Module } from './bs-select/bs-select2.module';

@NgModule({
  declarations: [],
  imports: [BsInputModule, BsSelect2Module, DataGroupsModule],
  exports: [BsInputModule, BsSelect2Module, DataGroupsModule],
})
export class NgFormsModule {}
