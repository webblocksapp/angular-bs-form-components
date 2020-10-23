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
      </div>
    </ng-template>
  `,
})
export class CodeBlockComponent implements OnInit, AfterViewInit {
  @ViewChild('ref', { read: TemplateRef })
  ref: TemplateRef<any>;

  @Input() type: string;
  @Input() title: string;

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
    this.title =
      this.title === undefined ? this.defaultTitles[this.type] : this.title;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.templateRef = this.ref;
    });
  }
}
