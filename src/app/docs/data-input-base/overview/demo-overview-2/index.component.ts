import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-2',
  template: `
    <marker>Building a vanilla select</marker>
    <p>
      As the example before, here we will have a select component built from
      scratch inheriting from the <code>DataInputBase</code> class.
    </p>
    <code-example label="Demo:">
      <div content>
        Check the code <i class="i-btn fas fa-code"></i> to see more details.
      </div>
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <div content-code>
        <ul>
          <li>
            On this example, the first three tabs are the built HTML, CSS and TS
            for the custom component <code>select-input</code>.
          </li>
          <li>
            The last three tabs are the implementation of the built custom
            component.
          </li>
        </ul>
      </div>
      <code-block
        label="Vanilla Select Input HTML"
        type="custom-component-html-1"
        [code]="customComponentHtml1"
        language="html"
      >
        <p>
          As in the first example, some useful properties of the framework where
          implemented to control the <code>select-input</code> component
          highlighting and error feedback.
        </p>
        <p>
          Also we have to code the <code>options</code> property for rendering
          the select options.
        </p>
      </code-block>
      <code-block
        label="Vanilla Select Input CSS"
        type="custom-component-css-1"
        [code]="customComponentCss1"
        language="css"
      >
        <p>
          Here we have similar styles as in the first example for our custom
          component with it's highlighter classes.
        </p>
      </code-block>
      <code-block
        label="Vanilla Select Input TS"
        type="custom-component-ts-1"
        [code]="customComponentTs1"
        language="ts"
      >
        <p>
          Again here is where magic happens when our custom component extends
          from <code>DataInputBase</code> class.
        </p>
        <p>
          To fill the model with the data selected, it's necessary to use the
          framework's method <code>bindChangeEvents</code> which is triggered
          when the <code>change</code> event occurs on the
          <code>select</code> html component.
        </p>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html">
        <p>
          Here is the implementation of the <code>select-input</code> component.
        </p>
      </code-block>
      <code-block type="component" [code]="componentCode" language="typescript">
        <p>
          Again we can try the <code>fill</code> and <code>clear</code> methods
          to populate or reset the form.
        </p>
      </code-block>
      <code-block type="dto" [code]="dtoCode" language="typescript">
        <p>
          Finally the DTO defines the model structure and validation rules. On
          this case the <code>city</code> field must be numeric and required.
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
  public customComponentHtml1: string;
  public customComponentCss1: string;
  public customComponentTs1: string;

  ngOnInit() {
    this.htmlCode =
      require('!raw-loader!./running-code.component.html').default;
    this.componentCode =
      require('!raw-loader!./running-code.component.ts').default;
    this.dtoCode = require('!raw-loader!./example.dto.ts').default;

    this.customComponentHtml1 =
      require(`!raw-loader!../../../../shared/components/vanilla-components/select-input/select-input.component.html`).default;
    this.customComponentCss1 =
      require(`!raw-loader!../../../../shared/components/vanilla-components/select-input/select-input.component.css`).default;
    this.customComponentTs1 =
      require(`!raw-loader!../../../../shared/components/vanilla-components/select-input/select-input.component.ts`).default;
  }
}
