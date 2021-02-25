import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-examples',
  template: `
    <h5 marker>Selects with different sizes</h5>
    <example-1></example-1>
  `,
})
export class ExamplesComponent extends DocsBase {}
