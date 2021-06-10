import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-examples',
  template: `
    <h5 marker>Common events</h5>
    <example-1></example-1>

    <h5 marker>Simulating api request</h5>
    <example-2></example-2>

    <h5 marker>Simulating api request on multiple records</h5>
    <example-3></example-3>

    <h5 marker>Map select options</h5>
    <p>
      If you want to preserve the original data structure for select options,
      you can use the <code>map</code> property which receives an array of three
      positions (the last is optional):
      <code>['value', 'viewValue', 'disabled']</code>.
    </p>
    <example-4></example-4>
  `,
})
export class ExamplesComponent extends DocsBase {}
