import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-1',
  template: `
    <div class="alert alert-warning" role="alert">
      This overview uses the <b>Bootstrap 4.x Form Components</b> package. If
      you want to use your custom components, check the section of
      <b>Building your own components</b> to make them compatible with the NG
      Data Groups Framework.
    </div>

    <marker>Basic overview</marker>
    <p>
      Data groups are the encapsulation of a data model. To work with NG Data
      Groups is mandatory to encapsulate an NG Data Group form component into a
      data group because it binds the model data into each one.
    </p>
    <code-example label="Data groups overview">
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html">
        <p>
          It's mandatory to place the template ref variable
          <code>#dataInput</code> and the attribute <code>name</code> to bind
          the data input component with the corresponding dto attribute and
          validations.
        </p>
      </code-block>
      <code-block type="component" [code]="componentCode" language="typescript">
        <p>
          The data model must be initialized with a
          <code>BaseModel</code> instance passing as argument a dto.
        </p>
        <p>
          The <code>submitEvent</code> emits the event containing the
          <code>isValid</code>, <code>validatedData</code> and
          <code>errors</code> attributes.
        </p>
      </code-block>
      <code-block type="dto" [code]="dtoCode" language="typescript">
        <p>
          The DTO uses as base the library <code>class-validator</code>. It
          defines the data model structure and validations. All it's attributes
          are filled and validated by the <code>data-groups</code> component.
        </p>
      </code-block>
    </code-example>
  `,
})
export class IndexComponent implements OnInit {
  public htmlCode: string;
  public componentCode: string;
  public dtoCode: string;

  ngOnInit() {
    this.htmlCode =
      require('!raw-loader!./running-code.component.html').default;
    this.componentCode =
      require('!raw-loader!./running-code.component.ts').default;
    this.dtoCode = require('!raw-loader!./dtos/example-dto-1.dto.ts').default;
  }
}
