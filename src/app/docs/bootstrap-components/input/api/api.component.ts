import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-api',
  template: `
    <h4>Api reference for Bootstrap Input Component</h4>
    <code
      class="d-block mt-3 mb-3"
      [innerText]="
        'import { NgFormsModule } from &quot;@webblocksapp/ng-forms&quot;'
      "
    ></code>

    <h5 #marker>Properties</h5>

    <api-table>
      <api-table-row>
        <api-table-cell>@Input() label: string</api-table-cell>
        <api-table-cell>Test</api-table-cell>
      </api-table-row>
    </api-table>
  `,
})
export class ApiComponent extends DocsBase {}
