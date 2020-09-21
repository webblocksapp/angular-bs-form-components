import { NgModule } from '@angular/core';
import { BsInputModule } from './bs-input/bs-input.module';
import { DataGroupsModule } from './data-group/data-groups.module';
import { BsSelect2Module } from './bs-select2/bs-select2.module';
import { BsSelectModule } from './bs-select/bs-select.module';

@NgModule({
  declarations: [],
  imports: [BsInputModule, BsSelect2Module, BsSelectModule, DataGroupsModule],
  exports: [BsInputModule, BsSelect2Module, BsSelectModule, DataGroupsModule],
})
export class NgFormsModule {}
