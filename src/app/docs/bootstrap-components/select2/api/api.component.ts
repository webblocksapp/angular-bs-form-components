import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

@Component({
  selector: 'app-api',
  template: `
    <h4>Api reference for Bootstrap Select2 Component</h4>
    <code
      class="d-block mt-3 mb-3"
      [innerText]="
        'import { NgFormsModule } from &quot;@webblocksapp/ng-forms&quot;'
      "
    ></code>

    <marker>Properties</marker>

    <api-table [data]="properties"></api-table>

    <marker>Events</marker>

    <api-table [data]="events"></api-table>
  `,
})
export class ApiComponent extends DocsBase {
  public properties: ApiTableData[] = [
    { name: '@Input() id: string', description: 'Select2 unique id.' },
    { name: '@Input() label: string', description: 'Select2 label.' },
    { name: '@Input() name: string', description: 'Select2 name.' },
    {
      name: `@Input() size: InputSize<br />'default' | 'large' | 'small'`,
      description: 'By default <code>default</code>. Select2 size.',
    },
    {
      name: '@Input() placeholder: string',
      description: 'Select2 placeholder.',
    },
    {
      name: '@Input() disabled: string',
      description: 'Disabled select attribute.',
    },
    { name: '@Input() help: string', description: 'Select2 hint text.' },
    {
      name: '@Input() startSlot: string',
      description: 'Appends a text slot at the beginning of the select.',
    },
    {
      name: '@Input() startSlotHtml: string',
      description:
        'Appends an slot with rendered html at the beginning of the select.',
    },
    {
      name: '@Input() endSlot: string',
      description: 'Appends a text slot at the end of the select.',
    },
    {
      name: '@Input() endSlotHtml: string',
      description:
        'Appends an slot with rendered html at the end of the select.',
    },
    {
      name: '@Input() options: Array&lt;SelectOption&gt; | Array&lt;SelectOptionGroup&gt;',
      description: 'The array of selectable options.',
    },
    {
      name: '@Input() theme: string',
      description: `By default is undefined. Set it to <code>bootstrap</code> if your project uses Bootstrap. 
      If your are using a Bootstrap template and it supports the Select2 component, keep it undefined to avoid conflicting styles.`,
    },
    {
      name: '@Input() configs: { [key: string]: any }',
      description: `Give access to the <a href="https://select2.org/configuration/options-api" target="blank">
      native API options of Select2 jQuery component</a>.`,
    },
    {
      name: `@Input() multiple: string<br> 'multiple'`,
      description: `Enables multi-select.`,
    },
    {
      name: `@Input() noResults: string`,
      description: `No results message text.`,
    },
  ];

  public events: ApiTableData[] = [
    {
      name: '@Output() selectEvent: EventEmitter&lt;any&gt;',
      description: 'Emits event when a select2 item is selected.',
    },
    {
      name: '@Output() clearEvent: EventEmitter&lt;any&gt;',
      description: 'Emits event when select2 is cleared.',
    },
    {
      name: '@Output() closeEvent: EventEmitter&lt;any&gt;',
      description: 'Emits event when select2 is closed.',
    },
  ];
}
