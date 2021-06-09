import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-examples',
  template: `
    <h5 marker>Common events</h5>
    <example-1></example-1>
  `,
})
export class ExamplesComponent extends DocsBase {}
