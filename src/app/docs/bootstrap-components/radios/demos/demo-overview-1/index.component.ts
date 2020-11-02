import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-1',
  template: `
    <code-example label="Bootstrap radios overview">
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block
        type="component"
        [code]="componentCode"
        language="typescript"
      ></code-block>
    </code-example>
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
