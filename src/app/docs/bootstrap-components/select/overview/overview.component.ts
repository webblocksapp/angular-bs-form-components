import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      Bootstrap select uses as base the library <code>bootstrap-select</code>.
      All its functionalities have been angularized into the
      <code>bs-select</code> component to make easier its usability.
    </p>

    <demo-overview-1></demo-overview-1>

    <marker>Working with multiple selects</marker>
    <p>
      With <code>data-groups</code> component you can easily fill and validate
      multiple selects.
    </p>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
