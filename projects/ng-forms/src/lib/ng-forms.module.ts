import { NgModule } from '@angular/core';
import { BsInputModule } from './bs-input/bs-input.module';
import { DataGroupsModule } from './data-group/data-groups.module';
import { BsSelect2Module } from './bs-select2/bs-select2.module';
import { BsSelectModule } from './bs-select/bs-select.module';
import { BsChecksModule } from './bs-checks/bs-checks.module';
import { BsRadiosModule } from './bs-radios/bs-radios.module';
import { BsFileModule } from './bs-file/bs-file.module';
import { BsDatepickerModule } from './bs-datepicker/bs-datepicker.module';

@NgModule({
  declarations: [],
  imports: [
    BsInputModule,
    BsSelect2Module,
    BsSelectModule,
    BsChecksModule,
    BsRadiosModule,
    DataGroupsModule,
    BsFileModule,
    BsDatepickerModule,
  ],
  exports: [
    BsInputModule,
    BsSelect2Module,
    BsSelectModule,
    BsChecksModule,
    BsRadiosModule,
    DataGroupsModule,
    BsFileModule,
    BsDatepickerModule,
  ],
})
export class NgFormsModule {}
