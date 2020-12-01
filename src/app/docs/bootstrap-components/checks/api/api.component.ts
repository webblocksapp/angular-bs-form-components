import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

@Component({
  selector: 'app-api',
  template: `
    <h4>Api reference for Bootstrap Checks Component</h4>
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
    { name: '@Input() id: string', description: 'Checkbox unique id.' },
    { name: '@Input() label: string', description: 'Checkbox label.' },
    { name: '@Input() name: string', description: 'Checkbox name.' },
    {
      name: '@Input() disabled: string',
      description: 'Disabled checkbox attribute.',
    },
    { name: '@Input() help: string', description: 'Checkboxes hint text.' },
    {
      name: '@Input() options: any',
      description: 'Defines list of checkboxes to check.',
    },
    {
      name: `@Input() display: CheckDisplay<br> 'default' | 'inline'`,
      description: 'Sets checkboxes positioning.',
    },
    {
      name: `@Input() look: CheckLook<br> 'check' | 'circle' | 'switch'`,
      description: 'Sets checkboxes style.',
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
