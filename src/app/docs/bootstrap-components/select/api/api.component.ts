import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';
import ApiTableData from '@shared/components/api-table/api-table-data.type';

@Component({
  selector: 'app-api',
  template: `
    <h4>Api reference for Bootstrap Select Component</h4>
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
    { name: '@Input() id: string', description: 'Select unique id.' },
    { name: '@Input() label: string', description: 'Select label.' },
    { name: '@Input() name: string', description: 'Select name.' },
    {
      name: `@Input() size: InputSize<br />'default' | 'large' | 'small'`,
      description: 'By default <code>default</code>. Select size.',
    },
    {
      name: '@Input() placeholder: string',
      description: 'Select placeholder.',
    },
    {
      name: '@Input() disabled: string',
      description: 'Disabled select attribute.',
    },
    { name: '@Input() help: string', description: 'Select hint text.' },
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
      name:
        '@Input() options: Array&lt;SelectOption&gt; | Array&lt;SelectOptionGroup&gt;',
      description: 'The array of selectable options.',
    },
    {
      name: '@Input() configs: { [key: string]: any }',
      description: `
        Give access to the <a href="https://developer.snapappointments.com/bootstrap-select/options/" target="blank">
        native API options of Bootstrap Select jQuery component</a>.`,
    },
    {
      name: '@Input() multiple: boolean',
      description: 'Enables multiple select.',
    },
    {
      name: '@Input() liveSearch: boolean',
      description: 'Enables live search input on select.',
    },
    {
      name: '@Input() maxOptions: number',
      description: 'The max number of options to be selected.',
    },
    {
      name: '@Input() maxOptionsText: string',
      description: `To customize the max options text. E.g. <i>'You can select max {n} colors'</i>. <b>Note:</b> use <code>{n}</code> variable
      to dynamically count selected options.`,
    },
    {
      name: `@Input() selectedTextFormat: string<br>
      'values' | 'static' | 'count' |<br>
      'count > x' (where x is an integer)`,
      description: `Specify how the selection is displayed:
      <ul>
        <li><code>values</code>: A comma delimited list of selected values (default)</li>
        <li><code>count</code>: If one item is selected, then the option value is shown. If more than one is selected then the number of selected items is displayed, e.g. 2 of 6 selected</li>
        <li><code>count > x</code>: Where x is the number of items selected when the display format changes from values to count</li>
        <li><code>static</code>: Always show the select title (placeholder), regardless of selection</li>
      </ul>
      `,
    },
    {
      name: '@Input() countSelectedText: string',
      description: `
        Sets the format for the text displayed when selectedTextFormat is count or <code>count > #</code>.<br>
        <code>{0}</code> is the selected amount. <code>{1}</code> is total available for selection (If maxOptions is enabled and multiple). E.g. <i>{0} of {1} colors selected.</i>
      `,
    },
    {
      name: '@Input() showTick: boolean',
      description: 'Shows a tick when an item is selected.',
    },
    {
      name: '@Input() iconBase: string',
      description:
        'Set the base to use a different icon font. By default is set fontAwesome.',
    },
    {
      name: '@Input() actionsBox: boolean',
      description:
        'When set to <code>true</code>, adds two buttons to the top of the dropdown menu (<b>Select All</b> & <b>Deselect All</b>).',
    },
    {
      name: '@Input() deselectAllText: string',
      description:
        'The text on the button that deselects all options when <code>actionsBox</code> is enabled.',
    },
    {
      name: '@Input() selectAllText: string',
      description:
        'The text on the button that selects all options when <code>actionsBox</code> is enabled.',
    },
    {
      name: '@Input() dataHeader: string',
      description: 'Adds a header text on select. E.g. <i>Select a color</i>.',
    },
    {
      name: `@Input() direction: string<br>'up' | 'down'`,
      description: 'Positions the select above or below the input.',
    },
  ];

  public events: ApiTableData[] = [
    {
      name: '@Output() shownEvent: EventEmitter&lt;Event&gt;',
      description: 'Emits event when bootstrap select is shown.',
    },
    {
      name: '@Output() hiddenEvent: EventEmitter&lt;Event&gt;',
      description: 'Emits event when bootstrap select is hidden.',
    },
  ];
}
