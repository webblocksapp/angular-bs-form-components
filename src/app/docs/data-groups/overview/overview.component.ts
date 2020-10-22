import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      Data groups are the encapsulation of a data model. To work with NG Forms
      is mandatory to encapsulate an NG Form component into a datagroup because
      it binds the model data into each one.
    </p>

    <demo-overview-1></demo-overview-1>
  `,
})
export class OverviewComponent extends DocsBase {}
