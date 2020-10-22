import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-1',
  template: `
    <app-code-example title="Data groups Overview">
      <app-running-code>running code works!</app-running-code>
      <app-html>html works!</app-html>
      <app-component>
        <code>
          <pre>{{ componentCode }}</pre>
        </code>
      </app-component>
    </app-code-example>
  `,
})
export class IndexComponent implements OnInit {
  public htmlCode: string;
  public cssCode: string;
  public componentCode: string;
  public dtoCode: string;

  ngOnInit() {
    this.componentCode = require('!raw-loader!./running-code.component.ts').default;
  }
}
