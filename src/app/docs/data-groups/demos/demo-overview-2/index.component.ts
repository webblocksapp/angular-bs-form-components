import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-2',
  template: `
    <code-example label="Multiple data models">
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
        [code]="dtoCode"
        language="typescript"
      ></code-block>
    </code-example>
  `,
})
export class IndexComponent implements OnInit {
  public htmlCode: string;
  public componentCode: string;
  public dtoCode: string;

  ngOnInit() {
    this.htmlCode = require('!raw-loader!./running-code.component.html').default;
    this.componentCode = require('!raw-loader!./running-code.component.ts').default;
    this.dtoCode = require('!raw-loader!./dtos/book.dto.ts').default;
  }
}
