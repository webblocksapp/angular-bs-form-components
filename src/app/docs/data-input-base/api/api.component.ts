import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

@Component({
  selector: 'app-api',
  template: `
    <h4>Api reference for Data Input Base class</h4>

    <p class="mb-3">
      Here we can find all the properties, events and methods than will be
      inherited by the form component that extends from the
      <code>DataInputBase</code> class.
    </p>

    <marker>Input Properties</marker>
    <p>
      It's a set of callable input properties during the implementation of the
      built component.
    </p>
    <api-table [data]="properties"></api-table>

    <marker>Callable Properties</marker>
    <p>
      It's a set of callable properties to help building the component's logic.
    </p>
    <api-table [data]="callableProperties"></api-table>

    <marker>Events</marker>
    <p>
      It's a set of callable events during the implementation of the built
      component.
    </p>
    <api-table [data]="events"></api-table>

    <marker>Events Triggers</marker>
    <p>
      It's a set of callable methods when building the component's logic. Once
      called an event will be emitted.
    </p>
    <api-table [data]="eventsTriggers">
      <span description-title>Triggered event</span>
    </api-table>

    <marker>Events Binders</marker>
    <p>
      It's a set of over-writable methods to bind additional logic inside an
      event trigger. It must always return the passed <code>event</code>.
    </p>
    <api-table [data]="eventsBinders">
      <span description-title>Adds additional logic to the event trigger</span>
    </api-table>

    <marker>Lifecycle methods</marker>
    <p>
      The <code>DataInputBase</code> class provides it's own over-writable
      lifecycle methods to avoid using some of the provided by an Angular
      component. It's because there is logic running inside the default Angular
      lifecycle methods on the base class. So overriding them, it will break the
      behavior of the base component.
    </p>
    <api-table [data]="lifeCycleMethods">
      <span description-title>It does the same functionality of</span>
    </api-table>

    <marker>Watcher methods</marker>
    <p>
      The following over-writable methods are triggered when a property changes
      inside the <code>DataInputBase</code>.
    </p>
    <api-table [data]="watcherMethods">
      <span description-title>
        Triggered when the following property changes
      </span>
    </api-table>

    <marker>Validation methods</marker>
    <p>The following methods are used for data validation.</p>
    <api-table [data]="validationMethods"></api-table>
  `,
})
export class ApiComponent extends DocsBase {
  public properties: ApiTableData[] = [
    {
      name: "@Input() @HostBinding('id') id: string",
      description: 'Input unique id.',
    },
    {
      name: '@Input() label: string',
      description: 'Input label.',
    },
    {
      name: '@Input() name: string;',
      description: 'Input name.',
    },
    {
      name: '@Input() type: InputType',
      description:
        'Input type. Supported types: <code>text</code>, <code>password</code>, <code>email</code>.',
    },
    {
      name: '@Input() size: any',
      description: 'Input size.',
    },
    {
      name: '@Input() placeholder',
      description: 'Input placeholder.',
    },
    {
      name: '@Input() disabled: boolean;',
      description: 'Disabled input attribute.',
    },
    {
      name: '@Input() readonly: boolean;',
      description: 'Readonly input attribute.',
    },
    {
      name: '@Input() help: string;',
      description: 'Input hint text.',
    },
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
      name: '@Input() autocomplete: boolean',
      description:
        'Appends an slot with rendered html at the end of the input.',
    },
    {
      name: '@Input() model: BaseModel',
      description: 'The <code>BaseModel</code> instance.',
    },
    {
      name: '@Input() highlightOnValid: boolean',
      description:
        'Enables highlighting when data is valid. By default is <code>false</code>.',
    },
  ];

  public callableProperties: ApiTableData[] = [
    {
      name: 'error: string',
      description: 'Contains the error message of the validated model.',
    },
    {
      name: 'isValid: boolean',
      description:
        'A computed property to define if data is valid. By default is <code>false</code>',
    },
    {
      name: 'isInvalid: boolean',
      description:
        'A computed property to define if data is invalid. By default is <code>false</code>',
    },
    {
      name: 'value: any',
      description:
        "The current component's value. By default is <code>null</code>.",
    },
  ];

  public events: ApiTableData[] = [
    {
      name: '@Output() focusEvent: EventEmitter<FocusEvent>',
      description: 'Focus event emitter.',
    },
    {
      name: '@Output() focusoutEvent: EventEmitter<FocusEvent>',
      description: 'Focus out event emitter',
    },
    {
      name: '@Output() blurEvent: EventEmitter<FocusEvent>',
      description: 'Blur event emitter',
    },
    {
      name: '@Output() changeEvent: EventEmitter<Event>',
      description: 'Change event emitter',
    },
    {
      name: '@Output() inputEvent: EventEmitter<Event>',
      description: 'Input event emitter',
    },
    {
      name: '@Output() keydownEvent: EventEmitter<KeyboardEvent>',
      description: 'Keydown event emitter',
    },
    {
      name: '@Output() keypressEvent: EventEmitter<KeyboardEvent>',
      description: 'Keypress event emitter',
    },
    {
      name: '@Output() keyupEvent: EventEmitter<KeyboardEvent>',
      description: 'Keyup event emitter',
    },
    {
      name: '@Output() clickEvent: EventEmitter<MouseEvent>',
      description: 'Click event emitter',
    },
    {
      name: '@Output() dblclickEvent: EventEmitter<MouseEvent>',
      description: 'Dblclick event emitter',
    },
    {
      name: '@Output() mousedownEvent: EventEmitter<MouseEvent>',
      description: 'Mouse down event emitter',
    },
    {
      name: '@Output() mousemoveEvent: EventEmitter<MouseEvent>',
      description: 'Mouse move event emitter',
    },
    {
      name: '@Output() mouseoutEvent: EventEmitter<MouseEvent>',
      description: 'Mouse out event emitter',
    },
    {
      name: '@Output() mouseoverEvent: EventEmitter<MouseEvent>',
      description: 'Mouse over event emitter',
    },
    {
      name: '@Output() mouseupEvent: EventEmitter<MouseEvent>',
      description: 'Mouse up event emitter',
    },
    {
      name: '@Output() mousewheelEvent: EventEmitter<MouseEvent>',
      description: 'Mouse wheel event emitter',
    },
    {
      name: '@Output() wheelEvent: EventEmitter<MouseEvent>',
      description: 'Wheel event emitter',
    },
  ];

  public eventsTriggers: ApiTableData[] = [
    {
      name: 'focus(event: any): any',
      description:
        '<code>@Output() focusEvent: EventEmitter<FocusEvent></code>',
    },
    {
      name: 'focusout(event: any): any',
      description:
        '<code>@Output() focusoutEvent: EventEmitter<FocusEvent></code>',
    },
    {
      name: 'blur(event: any): any',
      description: '<code>@Output() blurEvent: EventEmitter<FocusEvent></code>',
    },
    {
      name: 'change(event: any): any',
      description: '<code>@Output() changeEvent: EventEmitter<Event></code>',
    },
    {
      name: 'input(event: any): any',
      description: '<code>@Output() inputEvent: EventEmitter<Event></code>',
    },
    {
      name: 'keyup(event: any): any',
      description: '<code>@Output() keyupEvent: EventEmitter<KeyboardEvent>',
    },
    {
      name: 'keydown(event: any): any',
      description:
        '<code>@Output() keydownEvent: EventEmitter<KeyboardEvent></code>',
    },
    {
      name: 'keypress(event: any): any',
      description:
        '<code>@Output() keypressEvent: EventEmitter<KeyboardEvent></code>',
    },
    {
      name: 'click(event: any): any',
      description:
        '<code>@Output() clickEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'dblclick(event: any): any',
      description:
        '<code>@Output() dblclickEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'mousedown(event: any): any',
      description:
        '<code>@Output() mousedownEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'mousemove(event: any): any',
      description:
        '<code>@Output() mousemoveEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'mouseout(event: any): any',
      description:
        '<code>@Output() mouseoutEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'mouseover(event: any): any',
      description:
        '<code>@Output() mouseoverEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'mouseup(event: any): any',
      description:
        '<code>@Output() mouseupEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'mousewheel(event: any): any',
      description:
        '<code>@Output() mousewheelEvent: EventEmitter<MouseEvent></code>',
    },
    {
      name: 'wheel(event: any): any',
      description:
        '<code>@Output() wheelEvent: EventEmitter<MouseEvent></code>',
    },
  ];

  public eventsBinders: ApiTableData[] = [
    {
      name: 'bindFocusEvents(event: any): any',
      description: '<code>focus(event: any): any</code>',
    },
    {
      name: 'bindFocusoutEvents(event: any): any',
      description: '<code>focusout(event: any): any</code>',
    },
    {
      name: 'bindBlurEvents(event: any): any',
      description: '<code>blur(event: any): any</code>',
    },
    {
      name: 'bindChangeEvents(event: any): any',
      description: '<code>change(event: any): any</code>',
    },
    {
      name: 'bindInputEvents(event: any): any',
      description: '<code>input(event: any): any</code>',
    },
    {
      name: 'bindKeyupEvents(event: any): any',
      description: '<code>keyup(event: any): any</code>',
    },
    {
      name: 'bindKeydownEvents(event: any): any',
      description: '<code>keydown(event: any): any</code>',
    },
    {
      name: 'bindKeypressEvents(event: any): any',
      description: '<code>keypress(event: any): any</code>',
    },
    {
      name: 'bindClickEvents(event: any): any',
      description: '<code>click(event: any): any</code>',
    },
    {
      name: 'bindDblclickEvents(event: any): any',
      description: '<code>dblclick(event: any): any</code>',
    },
    {
      name: 'bindMousedownEvents(event: any): any',
      description: '<code>mousedown(event: any): any</code>',
    },
    {
      name: 'bindMousemoveEvents(event: any): any',
      description: '<code>mousemove(event: any): any</code>',
    },
    {
      name: 'bindMouseoutEvents(event: any): any',
      description: '<code>mouseout(event: any): any</code>',
    },
    {
      name: 'bindMouseoverEvents(event: any): any',
      description: '<code>mouseover(event: any): any</code>',
    },
    {
      name: 'bindMouseupEvents(event: any): any',
      description: '<code>mouseup(event: any): any</code>',
    },
    {
      name: 'bindMousewheelEvents(event: any): any',
      description: '<code>mousewheel(event: any): any</code>',
    },
    {
      name: 'bindWheelEvents(event: any): any',
      description: '<code>wheel(event: any): any</code>',
    },
  ];

  public lifeCycleMethods: ApiTableData[] = [
    {
      name: 'setConfigsOnInit(): void',
      description: '<code>ngOnInit()</code>',
    },
    {
      name: 'setConfigsAfterViewInit(): void',
      description: '<code>ngAfterViewInit()</code>',
    },
    {
      name: 'setConfigsOnChanges(): void',
      description: '<code>ngOnChanges()</code>',
    },
    {
      name: 'setConfigsOnDoCheck(): void',
      description: '<code>ngDoCheck()</code>',
    },
    {
      name: 'setConfigsOnDestroy(): void',
      description: '<code>ngOnDestroy()</code>',
    },
  ];

  public watcherMethods: ApiTableData[] = [
    {
      name: 'detectPropertiesChanges(propName: string): void',
      description:
        'Any <code>@Input</code> property inherited and declared on the component. The <code>propName</code> argument is the name of the changing <code>@Input</code> property.',
    },
    {
      name: 'bindWatchModelEvents(): void',
      description: '<code>@Input() model: BaseModel</code>.',
    },
  ];

  public validationMethods: ApiTableData[] = [
    {
      name: 'validateField(): void',
      description:
        'Callable method. Triggers the validation of the data inside the component.',
    },
    {
      name: 'bindEventsAfterValidateField(): void',
      description:
        'Over-writable method. Triggered after <code>validateField</code> method occurs.',
    },
  ];
}
