import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-1',
  template: `
    <code-example label="Bootstrap radios overview">
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html"></code-block>
      <code-block
        type="component"
        [code]="componentCode"
        language="typescript"
      ></code-block>
      <code-block
        type="dto"
        [code]="dtoCode1"
        language="typescript"
      ></code-block>
      <code-block
        label="Options"
        type="options"
        [code]="dtoCode2"
        language="typescript"
      ></code-block>
    </code-example>
  `,
})
export class IndexComponent implements OnInit {
  public htmlCode: string;
  public cssCode: string;
  public componentCode: string;
  public dtoCode1: string;
  public dtoCode2: string;

  ngOnInit() {
    this.htmlCode = require('!raw-loader!./running-code.component.html').default;
    this.componentCode = require('!raw-loader!./running-code.component.ts').default;
    this.dtoCode1 = require('!raw-loader!../common/dtos/user.dto.ts').default;
    this.dtoCode2 = require('!raw-loader!./dtos/demo1-options.dto.ts').default;
  }
}
