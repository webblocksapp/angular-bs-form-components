import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsSelect2Component } from './bs-select2.component';

@NgModule({
  exports: [BsSelect2Component],
  imports: [CommonModule],
  declarations: [BsSelect2Component],
})
export class BsSelect2Module {}
