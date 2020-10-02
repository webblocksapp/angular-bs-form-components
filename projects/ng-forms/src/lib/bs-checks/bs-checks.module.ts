import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsChecksComponent } from './bs-checks.component';

@NgModule({
  exports: [BsChecksComponent],
  imports: [CommonModule],
  declarations: [BsChecksComponent],
})
export class BsChecksModule {}
