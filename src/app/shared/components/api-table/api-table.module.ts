import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiTableComponent } from './api-table.component';

@NgModule({
  exports: [ApiTableComponent],
  imports: [CommonModule],
  declarations: [ApiTableComponent],
})
export class ApiTableModule {}
