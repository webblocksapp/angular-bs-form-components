import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      The <code>BaseModel</code> class is where is defined all the data model
      that will receive a form UI or complex UI component that manage data and
      needs to validate it. A <code>BaseModel</code> instance can be injected
      only on components that have extended from the
      <code>DataInputBase</code> class. Main responsibilities of this class are
      to validate, fill and clear data from an UI component.
    </p>
    <p>
      A <code>BaseModel</code> instance can be used wrapped inside a
      <code>data-groups</code> component or independently. This second way is
      preferred if we are going to use a more complex UI that manage data that
      is not properly a form.
    </p>
    <p>
      For this examples, we are going to use the
      <a href="/docs/bootstrap/setup" target="blank"
        >Bootstrap 4.x Form Components</a
      >. These extends from the <code>DataInputBase</code> class, making them
      compatible with the <code>BaseModel</code> instances.
    </p>
    <demo-overview-1></demo-overview-1>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
