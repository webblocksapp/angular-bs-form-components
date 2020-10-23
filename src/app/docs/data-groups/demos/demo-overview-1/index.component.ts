import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-1',
  template: `
    <app-code-example title="Data groups Overview">
      <code-block type="running-code">Running code works!</code-block>
      <code-block type="html">Html works!</code-block>
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
