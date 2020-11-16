import { Component, ContentChildren, QueryList } from '@angular/core';
import { ApiTableRowComponent } from './components/api-table-row.component';

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
        <ng-container
          *ngFor="let apiTableRowComponent of apiTableRowComponents"
        >
          <tr>
            <ng-container
              [ngTemplateOutlet]="apiTableRowComponent.templateRef"
            ></ng-container>
          </tr>
        </ng-container>
      </tbody>
    </table>
  `,
})
export class ApiTableComponent {
  @ContentChildren(ApiTableRowComponent)
  apiTableRowComponents: QueryList<ApiTableRowComponent>;
}
