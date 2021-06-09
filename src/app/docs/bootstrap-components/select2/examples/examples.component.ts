import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-examples',
  template: `
    <h5 marker>Select2 with different sizes</h5>
    <example-1></example-1>

    <h5 marker>Multiple selection</h5>
    <example-2></example-2>

    <h5 marker>Common events</h5>
    <example-3></example-3>

    <h5 marker>Simulating api request</h5>
    <example-4></example-4>

    <h5 marker>Simulating api request on multiple records</h5>
    <example-5></example-5>

    <h5 marker>Map select options</h5>
    <p>
      If you want to preserve the original data structure for select2 options,
      you can use the <code>map</code> property which receives an array of three
      positions (the last is optional):
      <code>['value', 'viewValue', 'disabled']</code>. <code>map</code> property
      doesn't support select groups yet.
    </p>
    <example-6></example-6>
  `,
})
export class ExamplesComponent extends DocsBase {}
