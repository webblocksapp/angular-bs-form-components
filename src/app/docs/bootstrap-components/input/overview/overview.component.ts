import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      Bootstrap inputs inherits most of common used bootstrap input css classes.
    </p>

    <demo-overview-1></demo-overview-1>

    <marker>Working with multiple inputs</marker>
    <p>
      With <code>data-groups</code> component you can easily fill and validate
      multiple inputs.
    </p>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
