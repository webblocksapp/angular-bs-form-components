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
      // tslint:disable-next-line: quotemark
      name: "@Input() type: InputType<br /> ('text' | 'password' | 'email')",
      description: ' Form input type.',
    },
    {
      // tslint:disable-next-line: quotemark
      name: "@Input() size: InputSize<br />('default' | 'large' | 'small')",
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
      name: '@Output() focusEvent: EventEmitter<FocusEvent>',
      description: 'Focus event emitter.',
    },
    {
      name: '@Output() focusoutEvent: EventEmitter<FocusEvent>',
      description: 'Focusout event emitter.',
    },
    {
      name: '@Output() blurEvent: EventEmitter<FocusEvent>',
      description: 'Blur event emitter.',
    },
    {
      name: '@Output() changeEvent: EventEmitter<Event>',
      description: 'Change event emitter.',
    },
    {
      name: '@Output() inputEvent: EventEmitter<Event>',
      description: 'Input event emitter.',
    },
    {
      name: '@Output() keydownEvent: EventEmitter<KeyboardEvent>',
      description: 'Keydown event emitter.',
    },
    {
      name: '@Output() keypressEvent: EventEmitter<KeyboardEvent>',
      description: 'Keypress event emitter.',
    },
    {
      name: '@Output() keyupEvent: EventEmitter<KeyboardEvent>',
      description: 'Keyup event emitter.',
    },
    {
      name: '@Output() clickEvent: EventEmitter<MouseEvent>',
      description: 'Click event emitter.',
    },
    {
      name: '@Output() dblclickEvent: EventEmitter<MouseEvent>',
      description: 'DblClick event emitter.',
    },
    {
      name: '@Output() mousedownEvent: EventEmitter<MouseEvent>',
      description: 'Mousedown event emitter.',
    },
    {
      name: '@Output() mouseoutEvent: EventEmitter<MouseEvent>',
      description: 'Mouseout event emitter.',
    },
    {
      name: '@Output() mouseoverEvent: EventEmitter<MouseEvent>',
      description: 'Mouseover event emitter.',
    },
    {
      name: '@Output() mouseupEvent: EventEmitter<MouseEvent>',
      description: 'Mouseup event emitter.',
    },
    {
      name: '@Output() mousewheelEvent: EventEmitter<MouseEvent>',
      description: 'Mousewheel event emitter.',
    },
    {
      name: '@Output() wheelEvent: EventEmitter<MouseEvent>',
      description: 'Wheel event emitter.',
    },
  ];
}
