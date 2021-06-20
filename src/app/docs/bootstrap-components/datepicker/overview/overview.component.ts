import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      Bootstrap Datepicker uses as base library
      <code>bootstrap-datepicker</code>. All its functionalities have been
      angularized into the <code>bs-datepicker</code> component to make easier
      its usability.
    </p>

    <demo-overview-1></demo-overview-1>

    <marker>Working with multiple Datepickers</marker>
    <p>
      With <code>data-groups</code> component you can easily fill and validate
      multiple datepickers.
    </p>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
