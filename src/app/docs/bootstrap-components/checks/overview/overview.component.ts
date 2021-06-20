import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <demo-overview-1></demo-overview-1>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
