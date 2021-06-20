import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      Bootstrap select2 uses as base the library <code>select2</code>. All its
      functionalities have been angularized into the
      <code>bs-select2</code> component to make easier its usability.
    </p>

    <demo-overview-1></demo-overview-1>

    <marker>Working with multiple select2</marker>
    <p>
      With <code>data-groups</code> component you can easily fill and validate
      multiple select2.
    </p>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
