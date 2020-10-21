import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

declare var require: any;

@Component({
  selector: 'app-examples',
  template: ``,
})
export class ExamplesComponent extends DocsBase {
  ngAfterViewInit() {
    const myText = require('!raw-loader!./example.ts').default;
    console.log(myText);
  }
}
