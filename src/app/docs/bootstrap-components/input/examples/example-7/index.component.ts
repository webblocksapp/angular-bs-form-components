import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'example-7',
  template: `
    <code-example>
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
        label="Host DTO"
        type="dto"
        [code]="dtoCode1"
        language="typescript"
      ></code-block>
      <code-block
        label="Guest DTO"
        type="dto-2"
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
    this.dtoCode1 = require('!raw-loader!./host.dto.ts').default;
    this.dtoCode2 = require('!raw-loader!./guest.dto.ts').default;
  }
}
