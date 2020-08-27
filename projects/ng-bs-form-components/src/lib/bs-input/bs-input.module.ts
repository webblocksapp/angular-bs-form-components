import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsInputComponent } from './bs-input.component';

@NgModule({
  exports: [BsInputComponent],
  imports: [CommonModule],
  declarations: [BsInputComponent],
})
export class BsInputModule {}
