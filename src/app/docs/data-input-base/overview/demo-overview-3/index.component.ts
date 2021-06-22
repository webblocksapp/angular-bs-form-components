import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-3',
  template: `
    <marker>Building a vanilla multiple select</marker>
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
            for the custom component <code>multi-select-input</code>.
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
          This component is very similar in HTML to the example before. The only
          difference is that was added the <code>multiple</code> and
          <code>size</code> attributes on the <code>select</code> tag.
        </p>

        <p>
          Also an important point to notice is that the
          <code>value</code> attribute was removed from the
          <code>select</code> tag because won't make sense on this component.
          Due to it's a multiple select, the data type that will store is an
          <code>Array&lt;any&gt;</code>. So we will need to manage this data
          type in a particular way to re-render the selected options inside the
          component's logic (TS File).
        </p>
      </code-block>
      <code-block
        label="Vanilla Select Input CSS"
        type="custom-component-css-1"
        [code]="customComponentCss1"
        language="css"
      >
        <p>
          The styles kept the same as on the
          <code>select-input</code> component.
        </p>
      </code-block>
      <code-block
        label="Vanilla Select Input TS"
        type="custom-component-ts-1"
        [code]="customComponentTs1"
        language="ts"
      >
        <p>Here we have the following implementations:</p>
        <ul>
          <li>
            <code>detectPropertiesChanges</code>: framework's method.
            Implemented to watch the <code>@Input size</code> property and call
            the method <code>computeSize</code>.
          </li>
        </ul>
        <ul>
          <li>
            <code>bindWatchModelEvents</code>: framework's method. Implemented
            to watch the model's changes. Once a value is selected from the
            multiple select component, this method will be listening the model
            changes to trigger the <code>initSelectedOptions</code> method.
          </li>
        </ul>
        <ul>
          <li>
            <code>bindFocusoutEvents</code>: framework's method. Implemented to
            fill and validate the model when the multiple select is focused out.
            Remember that it's up to you which framework's method to choose for
            triggering the model filling and validation. Also it could be used
            the <code>bindChangeEvents</code> framework's method instead of
            <code>bindFocusoutEvents</code>. But in this example we wanted that
            the validation only occurs after the selection of the options and
            not during the selection.
          </li>
        </ul>
        <ul>
          <li>
            <code>initSelectedOptions</code>: this method was built specifically
            for this component. It's triggered when the model changes to
            highlight the selected options on the HTML. For example if the
            model's property <code>cities</code> has the value
            <code>[2, 3]</code>, the multi select component will highlight the
            <i>Bogotá</i> and <i>Lima</i> cities. (Click on the populate button
            to see the example in action). Also take into account the data type.
            In both multi selects we are receiving an
            <code>Array[number]</code> data type, so it's necessary to implement
            the <code>parseValue</code> function to match the data types, if
            not, the options values will be always returned as strings.
          </li>
        </ul>
        <ul>
          <li>
            <code>getSelectedOptions</code>: this method was built specifically
            for this component. It's the traditional way to retrieve the
            selected options from a multiple select using javascript.
          </li>
        </ul>
        <ul>
          <li>
            <code>computeSize</code>: this method was built specifically for
            this component. It helps to get the vertical size of the select
            according to the options length.
          </li>
        </ul>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html">
        <p>
          Here is the implementation of the
          <code>multi-select-input</code> component.
        </p>
      </code-block>
      <code-block type="component" [code]="componentCode" language="typescript">
        <p>
          Again we can try the fill and clear methods to populate or reset the
          form. Notice how the selected options are highlighted using the
          <code>fill</code> method from the <code>BaseModel</code>. When running
          the <code>fill</code> method from the framework class, it will emit a
          change inside the model watcher and all the logic inside the
          <code>bindWatchModelEvents</code> method (implemented on the Vanilla
          Select Input TS) will be executed, wrapped on the
          <code>initSelectedOptions</code> method to highlight the selected
          options. The same occurs with the <code>clear</code> method.
        </p>
      </code-block>
      <code-block type="dto" [code]="dtoCode" language="typescript">
        <p>
          Finally we have our model attributes and validation rules. Notice that
          the <code>@IsNumber</code> decorator has as second parameter the
          object <code>&#x0007B; each: true &#x0007D;</code>. It's how is
          declared a validation to check if it's an array of numbers. Check for
          more validation rules on the
          <a href="https://github.com/typestack/class-validator" target="blank">
            <code>class-validator</code>
          </a>
          official docs.
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
      require(`!raw-loader!../../../../shared/components/vanilla-components/multi-select-input/multi-select-input.component.html`).default;
    this.customComponentCss1 =
      require(`!raw-loader!../../../../shared/components/vanilla-components/multi-select-input/multi-select-input.component.css`).default;
    this.customComponentTs1 =
      require(`!raw-loader!../../../../shared/components/vanilla-components/multi-select-input/multi-select-input.component.ts`).default;
  }
}
