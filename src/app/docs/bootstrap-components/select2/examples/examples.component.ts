import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-examples',
  template: `
    <h5 #marker>Select2 with different sizes</h5>
    <example-1></example-1>

    <h5 #marker>Multiple selection</h5>
    <example-2></example-2>
  `,
})
export class ExamplesComponent extends DocsBase {}
