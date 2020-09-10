import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGroupsComponent } from './data-groups.component';
import { DataGroupComponent } from './components/data-group.component';
import { DataFooterComponent } from './components/data-footer.component';

@NgModule({
  exports: [DataGroupsComponent, DataGroupComponent, DataFooterComponent],
  imports: [CommonModule],
  declarations: [DataGroupsComponent, DataGroupComponent, DataFooterComponent],
})
export class DataGroupsModule {}
