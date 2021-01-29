import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-2',
  template: `
    <code-example label="Multiple checks">
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block type="html" [code]="htmlCode1" language="html"></code-block>
      <code-block
        type="component"
        [code]="componentCode1"
        language="typescript"
      ></code-block>
      <code-block
        type="dto"
        [code]="dtoCode1"
        language="typescript"
      ></code-block>
    </code-example>
  `,
})
export class IndexComponent implements OnInit {
  public htmlCode1: string;
  public cssCode: string;
  public componentCode1: string;
  public dtoCode1: string;

  ngOnInit() {
    this.htmlCode1 = require('!raw-loader!./running-code.component.html').default;
    this.componentCode1 = require('!raw-loader!./running-code.component.ts').default;
    this.dtoCode1 = require('!raw-loader!./example.dto.ts').default;
  }
}
