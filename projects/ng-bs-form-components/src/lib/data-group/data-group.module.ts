import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGroupComponent } from './data-group.component';

@NgModule({
  exports: [DataGroupComponent],
  imports: [CommonModule],
  declarations: [DataGroupComponent],
})
export class DataGroupModule {}
