import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

@Component({
  selector: 'app-api',
  template: `
    <h4>Api reference for Bootstrap Datepicker Component</h4>
    <code
      class="d-block mt-3 mb-3"
      [innerText]="
        'import { NgFormsModule } from &quot;@webblocksapp/ng-forms&quot;'
      "
    ></code>

    <h5 marker>Properties</h5>

    <api-table [data]="properties"></api-table>

    <h5 marker>Events</h5>

    <api-table [data]="events"></api-table>
  `,
})
export class ApiComponent extends DocsBase {
  public properties: ApiTableData[] = [
    { name: '@Input() id: string', description: 'Datepicker unique id.' },
    { name: '@Input() label: string', description: 'Datepicker label.' },
    { name: '@Input() name: string', description: 'Datepicker name.' },
    {
      name: `@Input() size: InputSize<br />'default' | 'large' | 'small'`,
      description: 'By default <code>default</code>. Datepicker size.',
    },
    {
      name: '@Input() placeholder: string',
      description: 'Datepicker placeholder.',
    },
    {
      name: '@Input() disabled: string',
      description: 'Disabled datepicker attribute.',
    },
    { name: '@Input() help: string', description: 'Datepicker hint text.' },
    {
      name: '@Input() startSlot: string',
      description: 'Appends a text slot at the beginning of the datepicker.',
    },
    {
      name: '@Input() startSlotHtml: string',
      description:
        'Appends an slot with rendered html at the beginning of the datepicker.',
    },
    {
      name: '@Input() endSlot: string',
      description: 'Appends a text slot at the end of the datepicker.',
    },
    {
      name: '@Input() endSlotHtml: string',
      description:
        'Appends an slot with rendered html at the end of the datepicker.',
    },
  ];

  public events: ApiTableData[] = [
    {
      name: '@Output() focusoutEvent: EventEmitter&lt;FocusEvent&gt;',
      description: 'Focusout event emitter.',
    },
  ];
}
