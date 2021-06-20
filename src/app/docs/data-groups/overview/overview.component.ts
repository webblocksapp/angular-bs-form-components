import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <div class="alert alert-warning" role="alert">
      This overview uses the <b>Bootstrap 4.x Form Components</b> package. If
      you want to use your custom components, check the section of
      <b>Building your own components</b> to make them compatible with the NG
      Data Groups Framework.
    </div>

    <h5 marker>Basic overview</h5>
    <p>
      Data groups are the encapsulation of a data model. To work with NG Data
      Groups is mandatory to encapsulate an NG Data Group form component into a
      data group because it binds the model data into each one.
    </p>

    <demo-overview-1></demo-overview-1>

    <h5 marker>Working with multiple data models</h5>
    <p>
      With <code>data-groups</code> component you can easily fill and validate
      multiple data models. For example you are building a software for a
      library and you need to create and validate multiple books in a form. The
      following example shows how to do that in an easy way.
    </p>

    <demo-overview-2></demo-overview-2>

    <h5 marker>Validating nested objects</h5>
    <p>
      With NG Data Groups you can easily make complex validations on nested
      objects, using the <code>BaseModelArray</code> class, configuring on the
      constructor the model attributes that contains a nested object. The same
      approach can be done with the <code>BaseModel</code> class if you are not
      going to manipulate an array of models.
    </p>

    <demo-overview-3></demo-overview-3>

    <h5 marker>Conditional validation</h5>
    <demo-overview-4></demo-overview-4>
  `,
})
export class OverviewComponent extends DocsBase {}
