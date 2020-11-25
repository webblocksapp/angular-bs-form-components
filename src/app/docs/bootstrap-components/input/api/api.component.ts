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

    <api-table [data]="data1"></api-table>

    <h5 marker>Events</h5>

    <api-table [data]="data2"></api-table>
  `,
})
export class ApiComponent extends DocsBase {
  public data1: ApiTableData[] = [
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

  public data2: ApiTableData[] = [
    {
      name: '@Output() focusEvent: EventEmitter<FocusEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() focusoutEvent: EventEmitter<FocusEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() blurEvent: EventEmitter<FocusEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() changeEvent: EventEmitter<Event>',
      description: 'Test.',
    },
    { name: '@Output() inputEvent: EventEmitter<Event>', description: 'Test.' },
    {
      name: '@Output() keydownEvent: EventEmitter<KeyboardEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() keypressEvent: EventEmitter<KeyboardEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() keyupEvent: EventEmitter<KeyboardEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() clickEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() dblclickEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() mousedownEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() mouseoutEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() mouseoverEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() mouseupEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() mousewheelEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
    {
      name: '@Output() wheelEvent: EventEmitter<MouseEvent>',
      description: 'Test.',
    },
  ];
}
