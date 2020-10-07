import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsFileComponent } from './bs-file.component';

@NgModule({
  exports: [BsFileComponent],
  imports: [CommonModule],
  declarations: [BsFileComponent],
})
export class BsFileModule {}
