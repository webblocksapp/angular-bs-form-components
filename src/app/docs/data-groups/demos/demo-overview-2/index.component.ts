import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-2',
  template: `
    <code-example label="Multiple data models">
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html">
        <p>
          If you will work with multiple models, you must set
          <code>multiple</code> to <code>true</code> on your
          <code>data-groups</code>.
        </p>

        <p>
          Also keep in mind that the validated data on the submit event will
          return an array of errors or the array of validated book dtos.
        </p>
      </code-block>
      <code-block type="component" [code]="componentCode" language="typescript">
        <p>
          The model must be an array of <code>BaseModel</code>. Following the
          example, to add new books, you must push a new
          <code>bookModel</code> into the model. For removing books, it's
          mandatory to filter the model without the index of the removed book,
          to keep the indexes order of the array contained inside the model.
        </p>
      </code-block>
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
