import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-examples',
  template: `
    <example-1></example-1>
    <example-2></example-2>
    <example-3></example-3>
    <example-4></example-4>
    <example-5></example-5>
  `,
})
export class ExamplesComponent extends DocsBase {}
