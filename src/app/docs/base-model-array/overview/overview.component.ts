import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-overview',
  template: `
    <p>
      The <code>BaseModelArray</code> lets manipulate an array of
      <code>BaseModel</code> instances when we need to input, validate and
      submit multiple records at same time.
    </p>
    <p>
      A <code>BaseModelArray</code> instance can be used inside a
      <code>data-groups</code> component or independently. This second way is
      preferred if we are going to use a more complex UI that manage data that
      is not properly a form.
    </p>
    <p>
      For this examples, we are going to use the
      <a href="/docs/bootstrap/setup" target="blank"
        >Bootstrap 4.x Form Components</a
      >. These extends from the <code>DataInputBase</code> class, making them
      compatible with the <code>BaseModelArray</code> instances.
    </p>
    <demo-overview-1></demo-overview-1>
    <demo-overview-2></demo-overview-2>
  `,
})
export class OverviewComponent extends DocsBase {}
