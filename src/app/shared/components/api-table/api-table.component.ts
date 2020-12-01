import { Component, Input } from '@angular/core';
import ApiTableData from './api-table-data.type';

@Component({
  selector: 'api-table',
  template: `
    <table class="table table-bordered">
      <thead>
        <tr class="table-active">
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of data">
          <td class="console-font" [innerHtml]="item.name"></td>
          <td [innerHtml]="item.description"></td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      td {
        vertical-align: top;
      }

      td:nth-child(1) {
        width: 410px;
      }

      .console-font {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
          'Courier New', monospace;
        font-size: 12px;
      }
    `,
  ],
})
export class ApiTableComponent {
  @Input() data: ApiTableData[];
}
