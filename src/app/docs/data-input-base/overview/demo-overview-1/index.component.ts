import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'demo-overview-1',
  template: `
    <marker>Building a vanilla text input</marker>
    <p>
      The <b>Data Input Base</b> is the base class to be used for extending form
      UI components to bind them with the NG Data Groups Framework. The
      following example is a simple input component created from scratch
      inheriting from the <code>DataInputBase</code> class.
    </p>
    <code-example label="Demo:">
      <div content>
        Check the code <i class="i-btn fas fa-code"></i> to see more details.
      </div>
      <div content-code>
        <ul>
          <li>
            On this example, the first three tabs are the built HTML, CSS and TS
            for the custom component <code>text-input</code>.
          </li>
          <li>
            The last three tabs are the implementation of the built custom
            component.
          </li>
        </ul>
      </div>
      <code-block type="running-code">
        <running-code></running-code>
      </code-block>
      <code-block
        label="Vanilla Text Input HTML"
        type="custom-component-html-1"
        [code]="customComponentHtml1"
        language="html"
      >
        <p>
          Here we have the HTML template of the custom component
          <code>text-input</code> created with NG Data Groups. Some useful
          properties of the framework where implemented to control the component
          highlighting and error feedback when it's validated:
        </p>
        <ul>
          <li>
            <code>isValid</code>: a computed property which determines when the
            component must render the valid css class to highlight it when it's
            data is valid.
          </li>
          <li>
            <code>isInValid</code>: a computed property which determines when
            the component must render the invalid css class to highlight it when
            it's data has an error.
          </li>
          <li>
            <code>error</code>: contains the error message to be displayed when
            data is invalid.
          </li>
          <li>
            <code>id</code>: an auto-generated <code>uuid</code> to make your
            component with an unique html id. It's mandatory to concat the id
            with your custom namespace because it is also bind on the host
            component.
          </li>
          <li>
            <code>help</code>: a help text, normally displayed below the input
            component.
          </li>
        </ul>
        <p>
          You can check the other properties and methods on the
          <a href="/docs/data-input-base/api" target="blank">API section</a>.
        </p>
      </code-block>
      <code-block
        label="Vanilla Text Input CSS"
        type="custom-component-css-1"
        [code]="customComponentCss1"
        language="css"
      >
        <p>
          Here we have the styles according to the different highlight events
          when data is valid or invalid. For this example the styles were
          directly written on the component but they can be global if you are
          using a css framework like bootstrap, material, etc... The
          <code>is-valid</code> and <code>is-invalid</code> css classes may vary
          according to the css framework you are working with.
        </p>
      </code-block>
      <code-block
        label="Vanilla Text Input TS"
        type="custom-component-ts-1"
        [code]="customComponentTs1"
        language="typescript"
      >
        <p>
          Here is were magic occurs when our Angular components extends from the
          <code>DataInputBase</code> class. To trigger the validation
          highlighting, it's important to define which events will take care of
          that. Here the validation is triggered when the component is focused
          out using the framework's method <code>bindFocusoutEvents</code>.
        </p>
        <p>
          Also it's important to fill the model with the value that the html
          input is receiving. For this, the most recommended method is the
          <code>bindInputEvents</code> to fill the model when the input event
          occurs.
        </p>
        <p>
          If you want that your component detect the data type of your input,
          use the <code>parseValue</code> helper function. It will be very
          useful if your DTO needs to validate the data type. As you can see on
          this example, the <code>nickName</code> field is validated as a string
          on the DTO, so if you input a number, it will show an error.
        </p>
      </code-block>
      <code-block type="html" [code]="htmlCode" language="html">
        <p>
          Here we have implemented the <code>text-input</code> component. Using
          <code>DataInputBase</code> as parent class, it can now receive the
          data from the model when it's wrapped on a
          <code>data-groups</code> component. Remember also to add the template
          variable <code>#dataInput</code> and the <code>name</code> attribute
          to bind your model with your custom component.
        </p>
      </code-block>
      <code-block type="component" [code]="componentCode" language="typescript">
        <p>
          Check how is simple to fill and clear a form with the fill method
          provided by the <code>BaseModel</code> class. Also take a look of how
          the NG Data Groups Framework takes care of the component highlighting
          when data is valid or invalid, or when the model is filled or reset.
        </p>
      </code-block>
      <code-block type="dto" [code]="dtoCode" language="typescript">
        <p>
          Finally, the DTO has the properties with it's validation rules that
          will be loaded on the <code>BaseModel</code>. As you can see the
          <code>nickName</code> field has the decorator
          <code>@IsString()</code>, so as was mentioned before, our custom
          component <code>text-input</code> implemented the
          <code>parseValue</code> helper function to make the validation happens
          for this specific rule. If not, a number will be also taken as an
          string because by default the input is always parsed as string.
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
      require(`!raw-loader!../../../../shared/components/vanilla-components/text-input/text-input.component.html`).default;
    this.customComponentCss1 =
      require(`!raw-loader!../../../../shared/components/vanilla-components/text-input/text-input.component.css`).default;
    this.customComponentTs1 =
      require(`!raw-loader!../../../../shared/components/vanilla-components/text-input/text-input.component.ts`).default;
  }
}
