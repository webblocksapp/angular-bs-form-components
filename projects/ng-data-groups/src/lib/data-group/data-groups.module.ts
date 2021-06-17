import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGroupsComponent } from './data-groups.component';
import { DataGroupComponent } from './components/data-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [DataGroupsComponent, DataGroupComponent],
  imports: [CommonModule, FormsModule],
  declarations: [DataGroupsComponent, DataGroupComponent],
})
export class DataGroupsModule {}
