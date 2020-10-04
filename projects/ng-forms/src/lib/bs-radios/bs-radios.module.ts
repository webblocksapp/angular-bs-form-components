import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsRadiosComponent } from './bs-radios.component';

@NgModule({
  exports: [BsRadiosComponent],
  imports: [CommonModule],
  declarations: [BsRadiosComponent],
})
export class BsRadiosModule {}
