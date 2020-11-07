import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-2',
  template: `
    <code-example label="Multiple radios">
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
      <code-block
        label="Options HTML"
        type="html-options"
        [code]="htmlCode2"
        language="html"
      ></code-block>
      <code-block
        label="Options Component"
        type="options-component"
        [code]="componentCode2"
        language="typescript"
      ></code-block>
      <code-block
        label="Options DTO"
        type="options"
        [code]="dtoCode2"
        language="typescript"
      ></code-block>
    </code-example>
  `,
})
export class IndexComponent implements OnInit {
  public htmlCode1: string;
  public htmlCode2: string;
  public cssCode: string;
  public componentCode1: string;
  public componentCode2: string;
  public dtoCode1: string;
  public dtoCode2: string;

  ngOnInit() {
    this.htmlCode1 = require('!raw-loader!./running-code.component.html').default;
    this.htmlCode2 = require('!raw-loader!./demo-options/demo-options.component.html').default;
    this.componentCode1 = require('!raw-loader!./running-code.component.ts').default;
    this.componentCode2 = require('!raw-loader!./demo-options/demo-options.component.ts').default;
    this.dtoCode1 = require('!raw-loader!../common/dtos/user.dto.ts').default;
    this.dtoCode2 = require('!raw-loader!./demo-options/demo-options.dto.ts').default;
  }
}
