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

    <h5 #marker>Working with multiple data models</h5>
    <p>
      With <code>data-groups</code> component you can easily fill and validate
      multiple data models. For example you are building a software for a
      library and you need to create and validate multiple books in a form. The
      following example shows how to do that in an easy way.
    </p>

    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
