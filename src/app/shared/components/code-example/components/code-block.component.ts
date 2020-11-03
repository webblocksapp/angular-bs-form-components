import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'code-block',
  template: `
    <ng-template #ref>
      <div class="w-100">
        <ng-content></ng-content>
        <pre *ngIf="code" class="d-flex mb-0">
          <code class="w-100" [highlight]="code" [languages]="[language]"></code>
        </pre>
      </div>
    </ng-template>
  `,
})
export class CodeBlockComponent implements OnInit, AfterViewInit {
  @ViewChild('ref', { read: TemplateRef })
  ref: TemplateRef<any>;

  @Input() type: string;
  @Input() label: string;
  @Input() code: string;
  @Input() language: string;

  private defaultTitles = {
    html: 'HTML',
    css: 'CSS',
    component: 'Component',
    service: 'Service',
    dto: 'DTO',
    module: 'Module',
  };

  public templateRef: TemplateRef<any>;

  ngOnInit(): void {
    this.label =
      this.label === undefined ? this.defaultTitles[this.type] : this.label;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.templateRef = this.ref;
    });
  }
}
