import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerComponent } from './bs-datepicker.component';

@NgModule({
  exports: [BsDatepickerComponent],
  imports: [CommonModule],
  declarations: [BsDatepickerComponent],
})
export class BsDatepickerModule {}
