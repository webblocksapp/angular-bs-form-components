import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-2',
  template: `
    <marker>Base Model without <code>data-groups</code></marker>
    <code-example label="Data groups Overview">
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html">
        <p>
          On this example, we are not using the <code>data-groups</code> and
          <code>data-group</code> components. Instead of passing the
          <code>BaseModel</code> instance as property of the
          <code>data-groups</code> component, now the model must be passed as
          property of each form UI component.
        </p>
        <p>
          This way of using the <code>BaseModel</code> without
          <code>data-groups</code>, will let us to build more complex UI that
          need to pass, validate and submit data.
        </p>
      </code-block>
      <code-block type="component" [code]="componentCode" language="typescript">
        <p>
          Due to we lost the <code>form</code> native HTML component that wraps
          all the form UI components, now we need to subscribe to the model's
          event <code>onEnterPress</code> and pass as argument a
          <code>submit</code> event. With this all the form UI elements, bind to
          the <code>BaseModel</code> instance, will trigger the submit event
          when the <code>Enter</code> key is pressed, recovering the same
          behavior of a form without being a form.
        </p>
        <p>
          Also we need to code the <code>submit</code> method a little bit
          different: now we need to validate the model on the submit process. It
          will return again a promise of type <code>ValidationResult</code> that
          contains the validation status, errors and validated data ready to be
          send to the backend.
        </p>
        <p>
          Finally it's very important to unsubscribe from the
          <code>onEnterPress</code> event on the
          <code>ngDestroy</code> component's lifecycle to prevent a multiple
          subscription when the <code>Enter</code> key is pressed.
        </p>
      </code-block>
      <code-block type="dto" [code]="dtoCode" language="typescript">
        <p>The DTO remains the same as the past example.</p>
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
