import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'example-7',
  template: `
    <marker>Map select options</marker>
    <p>
      If you want to preserve the original data structure for select options,
      you can use the <code>map</code> property which receives an array of three
      positions (the last is optional):
      <code>['value', 'viewValue', 'disabled']</code>. <code>map</code> property
      doesn't support select groups yet.
    </p>
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
        type="dto"
        [code]="dtoCode"
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
    this.htmlCode =
      require('!raw-loader!./running-code.component.html').default;
    this.componentCode =
      require('!raw-loader!./running-code.component.ts').default;
    this.dtoCode = require('!raw-loader!./example.dto.ts').default;
  }
}
