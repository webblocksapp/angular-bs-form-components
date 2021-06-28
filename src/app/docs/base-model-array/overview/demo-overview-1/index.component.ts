import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-1',
  template: `
    <marker>Base Model Array with <code>data-groups</code></marker>
    <code-example>
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html">
        <p>
          With the help of the <code>data-groups</code> component we can bind
          the <code>BaseModelArray</code> instance into each form UI component.
          Remember that the latter must extend from
          <code>DataInputBase</code> to take advantage of the
          <code>BaseModelArray</code> and must have the template variable
          <code>#dataInput</code> to make the model binding happens.
        </p>
        <p>
          Notice also that inside the <code>data-groups</code> selector, there
          must be a <code>data-group</code> component that wraps the form UI
          elements. Here the <code>data-group</code> will have an
          <code>*ngFor</code> to iterate the models inside the
          <code>BaseModelArray</code> instance.
        </p>
        <p>
          Also it's very important that each form UI element has a
          <code>name</code> attribute which it's value is the property
          registered on the model's DTO.
        </p>
        <p>
          Finally the <code>data-groups</code> selector wraps all our form UI
          elements into a native HTML <code>form</code> component. If you need
          to create a complex UI that is not a form but needs to pass, validate
          and submit data, take a look on to the
          <i>Base Model Array without data-groups</i> example.
        </p>
      </code-block>
      <code-block type="component" [code]="componentCode" language="typescript">
        <p>
          Here we can see the instance of the
          <code>BaseModelArray</code> initialized in the
          <code>exampleModel</code> property. It receives as parameter in the
          constructor the DTO class, which contains all the data attributes and
          validation rules.
        </p>
        <p>
          The <code>BaseModelArray</code> also provides us of useful methods to
          fill or clear our form UI with data. Also to add and delete records.
        </p>
        <p>
          Finally, we can see how the submit action is handled thanks to the
          <code>submitEvent</code> from the <code>data-groups</code> component.
          It returns as event a promise that contains the validation status,
          errors and validated data ready to be send to the backend.
        </p>
      </code-block>
      <code-block type="dto" [code]="dtoCode" language="typescript">
        <p>
          On the DTO we find all the properties and validation rules to be
          loaded inside the <code>BaseModelArray</code> instance.
        </p>
      </code-block>
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
