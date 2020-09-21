import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsSelectComponent } from './bs-select.component';

@NgModule({
  exports: [BsSelectComponent],
  imports: [CommonModule],
  declarations: [BsSelectComponent],
})
export class BsSelectModule {}
