import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <h5 marker>Building a vanilla text input</h5>

    <p>
      The <b>Data Input Base</b> is the base class to be used for extending form
      UI components to bind them with the NG Data Groups Framework. The
      following example is a simple input component created from scratch
      inheriting from the <code>DataInputBase</code> class.
    </p>

    <demo-overview-1></demo-overview-1>

    <h5 marker>Example marker</h5>
    <p>Example paragraph.</p>

    <!-- demo-overview-2 -->
  `,
})
export class OverviewComponent extends DocsBase {}
