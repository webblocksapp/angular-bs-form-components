import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      The <b>Data Input Base</b> is the base class to be used for extending form
      UI components to bind them with the NG Data Groups Framework.
    </p>
    <p>
      The following examples are ideas of how to build your custom components
      with this framework, to take advantage of the inherited methods from the
      <code>DataInputBase</code> class and the <code>BaseModel</code> and
      <code>BaseModel</code> array classes.
    </p>
    <br />
    <demo-overview-1></demo-overview-1>
    <demo-overview-2></demo-overview-2>
    <demo-overview-3></demo-overview-3>
  `,
})
export class OverviewComponent extends DocsBase {}
