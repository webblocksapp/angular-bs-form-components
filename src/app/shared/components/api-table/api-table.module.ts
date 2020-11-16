import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiTableComponent } from './api-table.component';
import { ApiTableCellComponent } from './components/api-table-cell.component';
import { ApiTableRowComponent } from './components/api-table-row.component';

@NgModule({
  exports: [ApiTableComponent, ApiTableRowComponent, ApiTableCellComponent],
  imports: [CommonModule],
  declarations: [
    ApiTableComponent,
    ApiTableRowComponent,
    ApiTableCellComponent,
  ],
})
export class ApiTableModule {}
