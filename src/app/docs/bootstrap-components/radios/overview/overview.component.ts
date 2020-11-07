import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      Bootstrap radios improves the form a radio input is handled, inheriting
      the bootstrap stylesheets.
    </p>

    <demo-overview-1></demo-overview-1>

    <h5 #marker>Working with multiple radios</h5>
    <p>
      With <code>data-groups</code> component you can easily fill and validate
      multiple radios.
    </p>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
