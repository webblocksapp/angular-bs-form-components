import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

@Component({
  selector: 'app-api',
  template: `
    <h4>Api reference for Bootstrap Radios Component</h4>
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
    { name: '@Input() id: string', description: 'Radio unique id.' },
    { name: '@Input() label: string', description: 'Radio label.' },
    { name: '@Input() name: string', description: 'Radio name.' },
    {
      name: '@Input() disabled: string',
      description: 'Disabled radio attribute.',
    },
    { name: '@Input() help: string', description: 'Radios hint text.' },
    {
      name: '@Input() options: any',
      description: 'Defines list of radios to check.',
    },
    {
      name: `@Input() display: RadioDisplay<br> 'default' | 'inline'`,
      description: 'Sets radios positioning.',
    },
    {
      name: `@Input() look: RadioLook<br> 'radio' | 'switch'`,
      description: 'Sets radios style.',
    },
  ];

  public events: ApiTableData[] = [
    {
      name: '@Output() changeEvent: EventEmitter&lt;Event&gt;',
      description: 'Change event emitter.',
    },
    {
      name: '@Output() clickEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Click event emitter.',
    },
  ];
}
