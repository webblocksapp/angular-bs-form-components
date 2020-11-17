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

    <h5 marker>Properties</h5>

    <api-table>
      <api-table-row>
        <api-table-cell>@Input() id: string</api-table-cell>
        <api-table-cell>Form input unique id.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() label: string</api-table-cell>
        <api-table-cell>Form input label.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() name: string</api-table-cell>
        <api-table-cell>Form input name.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          >@Input() type: InputType<br />
          ('text' | 'password' | 'email')
        </api-table-cell>
        <api-table-cell> Form input type. </api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>
          @Input() size: InputSize<br />
          ('default' | 'large' | 'small')
        </api-table-cell>
        <api-table-cell>
          By default <code>default</code>. Form input size.
        </api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() placeholder: string</api-table-cell>
        <api-table-cell>Form input placeholder.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() disabled: string</api-table-cell>
        <api-table-cell>Disabled input attribute.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() help: string</api-table-cell>
        <api-table-cell>Form input hint text.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() startSlot: string</api-table-cell>
        <api-table-cell>
          Appends a text slot at the beginning of the input.
        </api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() startSlotHtml: string</api-table-cell>
        <api-table-cell>
          Appends an slot with rendered html at the beginning of the input.
        </api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() endSlot: string</api-table-cell>
        <api-table-cell>
          Appends a text slot at the end of the input.
        </api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell>@Input() endSlotHtml: string</api-table-cell>
        <api-table-cell>
          Appends an slot with rendered html at the end of the input.
        </api-table-cell>
      </api-table-row>
    </api-table>

    <h5 marker>Events</h5>

    <api-table>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() focusEvent: EventEmitter<FocusEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() focusoutEvent: EventEmitter<FocusEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() blurEvent: EventEmitter<FocusEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() changeEvent: EventEmitter<Event>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() inputEvent: EventEmitter<Event>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() keydownEvent: EventEmitter<KeyboardEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() keypressEvent: EventEmitter<KeyboardEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() keyupEvent: EventEmitter<KeyboardEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() clickEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() dblclickEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() mousedownEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() mouseoutEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() mouseoverEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() mouseupEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() mousewheelEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
      <api-table-row>
        <api-table-cell
          [innerText]="'@Output() wheelEvent: EventEmitter<MouseEvent>'"
        ></api-table-cell>
        <api-table-cell>Test.</api-table-cell>
      </api-table-row>
    </api-table>
  `,
})
export class ApiComponent extends DocsBase {}
