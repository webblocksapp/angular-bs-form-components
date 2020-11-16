import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { ApiTableCellComponent } from './api-table-cell.component';

@Component({
  selector: 'api-table-row',
  template: `
    <ng-template #ref>
      <ng-container
        *ngFor="let apiTableCellComponent of apiTableCellComponents"
      >
        <ng-container
          [ngTemplateOutlet]="apiTableCellComponent.templateRef"
        ></ng-container>
      </ng-container>
    </ng-template>
  `,
})
export class ApiTableRowComponent implements AfterViewInit {
  @ViewChild('ref', { read: TemplateRef })
  ref: TemplateRef<any>;

  @ContentChildren(ApiTableCellComponent)
  apiTableCellComponents: QueryList<ApiTableCellComponent>;

  public templateRef: TemplateRef<any>;

  ngAfterViewInit(): void {
    this.apiTableCellComponents.forEach((apiTableCellComponents, index) => {
      if (index === 0) {
        apiTableCellComponents.consoleFont = true;
        apiTableCellComponents.width = '40%';
      }

      if (index === 1) {
        apiTableCellComponents.width = '60%';
      }
    });

    setTimeout(() => {
      this.templateRef = this.ref;
    });
  }
}
