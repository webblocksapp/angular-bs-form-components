import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-4',
  template: `
    <marker>Conditional validation</marker>
    <code-example label="Data groups overview">
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
        label="Person DTO"
        type="dto-1"
        [code]="dtoCode1"
        language="typescript"
      ></code-block>
      <code-block
        label="Spouse DTO"
        type="dto-2"
        [code]="dtoCode2"
        language="typescript"
      ></code-block>
      <code-block
        label="Groups"
        type="any"
        [code]="any"
        language="typescript"
      ></code-block>
    </code-example>
  `,
})
export class IndexComponent implements OnInit {
  public htmlCode: string;
  public componentCode: string;
  public dtoCode1: string;
  public dtoCode2: string;
  public any: string;

  ngOnInit() {
    this.htmlCode =
      require('!raw-loader!./running-code.component.html').default;
    this.componentCode =
      require('!raw-loader!./running-code.component.ts').default;
    this.dtoCode1 = require('!raw-loader!./dtos/person.dto.ts').default;
    this.dtoCode2 = require('!raw-loader!./dtos/spouse.dto.ts').default;
    this.any = require('!raw-loader!./dtos/groups.ts').default;
  }
}
