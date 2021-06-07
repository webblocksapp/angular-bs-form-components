import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-examples',
  template: `
    <h5 marker>Selects with different sizes</h5>
    <example-1></example-1>

    <h5 marker>Select with option groups</h5>
    <example-2></example-2>

    <h5 marker>Multiple selection</h5>
    <example-3></example-3>

    <h5 marker>Common events</h5>
    <example-4></example-4>

    <h5 marker>Simulating api request</h5>
    <example-5></example-5>

    <h5 marker>Simulating api request on multiple records</h5>
    <example-6></example-6>
  `,
})
export class ExamplesComponent extends DocsBase {}
