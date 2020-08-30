import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGroupComponent } from './data-group.component';
import { DataBodyComponent } from './components/data-body.component';
import { DataFooterComponent } from './components/data-footer.component';

@NgModule({
  exports: [DataGroupComponent, DataBodyComponent, DataFooterComponent],
  imports: [CommonModule],
  declarations: [DataGroupComponent, DataBodyComponent, DataFooterComponent],
})
export class DataGroupModule {}
