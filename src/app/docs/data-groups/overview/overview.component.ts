import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes/docs-base';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      Data groups are the encapsulation of a data model. To work with NG Forms
      is mandatory to encapsulate an NG Form component into a datagroup because
      it binds the model data into each one.
    </p>
  `,
})
export class OverviewComponent extends DocsBase {}
