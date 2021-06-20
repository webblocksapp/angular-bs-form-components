import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <demo-overview-1></demo-overview-1>
    <demo-overview-2></demo-overview-2>
    <demo-overview-3></demo-overview-3>
    <demo-overview-4></demo-overview-4>
  `,
})
export class OverviewComponent extends DocsBase {}
