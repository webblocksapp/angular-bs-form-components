import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>Example paragraph.</p>

    <demo-overview-1></demo-overview-1>

    <h5 #marker>Example marker</h5>
    <p>Example paragraph.</p>

    <!-- demo-overview-2 -->
  `,
})
export class OverviewComponent extends DocsBase {}
