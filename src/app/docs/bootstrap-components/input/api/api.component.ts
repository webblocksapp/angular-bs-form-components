import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

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

    <api-table [data]="properties"></api-table>

    <h5 marker>Events</h5>

    <api-table [data]="events"></api-table>
  `,
})
export class ApiComponent extends DocsBase {
  public properties: ApiTableData[] = [
    { name: '@Input() id: string', description: 'Form input unique id.' },
    { name: '@Input() label: string', description: 'Form input label.' },
    { name: '@Input() name: string', description: 'Form input name.' },
    {
      name: '@Input() autocomplete: boolean',
      description: 'Enables or disables input autocomplete.',
    },
    {
      name: `@Input() type: InputType<br /> 'text' | 'password' | 'email'`,
      description: ' Form input type.',
    },
    {
      name: `@Input() size: InputSize<br />'default' | 'large' | 'small'`,
      description: 'By default <code>default</code>. Form input size.',
    },
    {
      name: '@Input() placeholder: string',
      description: 'Form input placeholder.',
    },
    {
      name: '@Input() disabled: string',
      description: 'Disabled input attribute.',
    },
    { name: '@Input() help: string', description: 'Form input hint text.' },
    {
      name: '@Input() startSlot: string',
      description: 'Appends a text slot at the beginning of the input.',
    },
    {
      name: '@Input() startSlotHtml: string',
      description:
        'Appends an slot with rendered html at the beginning of the input.',
    },
    {
      name: '@Input() endSlot: string',
      description: 'Appends a text slot at the end of the input.',
    },
    {
      name: '@Input() endSlotHtml: string',
      description:
        'Appends an slot with rendered html at the end of the input.',
    },
  ];

  public events: ApiTableData[] = [
    {
      name: '@Output() focusEvent: EventEmitter&lt;FocusEvent&gt;',
      description: 'Focus event emitter.',
    },
    {
      name: '@Output() focusoutEvent: EventEmitter&lt;FocusEvent&gt;',
      description: 'Focusout event emitter.',
    },
    {
      name: '@Output() blurEvent: EventEmitter&lt;FocusEvent&gt;',
      description: 'Blur event emitter.',
    },
    {
      name: '@Output() changeEvent: EventEmitter&lt;Event&gt;',
      description: 'Change event emitter.',
    },
    {
      name: '@Output() inputEvent: EventEmitter&lt;Event&gt;',
      description: 'Input event emitter.',
    },
    {
      name: '@Output() keydownEvent: EventEmitter&lt;KeyboardEvent&gt;',
      description: 'Keydown event emitter.',
    },
    {
      name: '@Output() keypressEvent: EventEmitter&lt;KeyboardEvent&gt;',
      description: 'Keypress event emitter.',
    },
    {
      name: '@Output() keyupEvent: EventEmitter&lt;KeyboardEvent&gt;',
      description: 'Keyup event emitter.',
    },
    {
      name: '@Output() clickEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Click event emitter.',
    },
    {
      name: '@Output() dblclickEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'DblClick event emitter.',
    },
    {
      name: '@Output() mousedownEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Mousedown event emitter.',
    },
    {
      name: '@Output() mouseoutEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Mouseout event emitter.',
    },
    {
      name: '@Output() mouseoverEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Mouseover event emitter.',
    },
    {
      name: '@Output() mouseupEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Mouseup event emitter.',
    },
    {
      name: '@Output() mousewheelEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Mousewheel event emitter.',
    },
    {
      name: '@Output() wheelEvent: EventEmitter&lt;MouseEvent&gt;',
      description: 'Wheel event emitter.',
    },
  ];
}
