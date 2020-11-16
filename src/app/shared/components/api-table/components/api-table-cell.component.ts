import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  Input,
} from '@angular/core';

@Component({
  selector: 'api-table-cell',
  template: `
    <ng-template #ref>
      <td [ngClass]="{ 'console-font': consoleFont }" [width]="width">
        <ng-content></ng-content>
      </td>
    </ng-template>
  `,
  styles: [
    `
      td {
        vertical-align: middle;
      }

      .console-font {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
          'Courier New', monospace;
        font-size: 14px;
      }
    `,
  ],
})
export class ApiTableCellComponent implements AfterViewInit {
  @ViewChild('ref', { read: TemplateRef })
  ref: TemplateRef<any>;

  @Input() consoleFont = false;
  @Input() width = '1%';

  public templateRef: TemplateRef<any>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.templateRef = this.ref;
    });
  }
}
