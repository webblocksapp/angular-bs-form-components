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
    {
      name: '@Input() configs: { [key: string]: string }',
      description: `
        Give access to the <a href="https://bootstrap-datepicker.readthedocs.io/en/latest/options.html" target="blank">
        native API options of bootstrap-datepicker jQuery component</a>.
      `,
    },
    {
      name: '@Input() autoclose: boolean',
      description:
        'Whether or not to close the datepicker immediately when a date is selected.',
    },
    {
      name: '@Input() calendarWeeks: boolean',
      description:
        'Whether or not to show week numbers to the left of week rows.',
    },
    {
      name: '@Input() clearBtn: boolean',
      description: `
        If true, displays a “Clear” button at the bottom of the datepicker to clear the input value. 
        If “autoclose” is also set to true, this button will also close the datepicker.
      `,
    },
    {
      name: '@Input() datesDisabled: Array<string> | string',
      description:
        'Array of date strings or a single date string formatted in the given date format.',
    },
    {
      name: '@Input() daysOfWeekDisabled: Array<string> | string',
      description: `
        Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated. 
        Example: disable weekends: <code>'06'</code> or <code>'0,6'</code> or <code>[0,6]</code>.
      `,
    },
    {
      name: '@Input() daysOfWeekHighlighted: Array<string> | string',
      description: `
        Days of the week that should be highlighted. Values are 0 (Sunday) to 6 (Saturday). 
        Multiple values should be comma-separated. Example: highlight weekends: <code>'06'</code> or <code>'0,6'</code> or <code>[0,6]</code>.
      `,
    },
    {
      name: '@Input() defaultViewDate: string',
      description: `
        Date to view when initially opening the calendar. The internal value of the date remains today as default, 
        but when the datepicker is first opened the calendar will open to <code>defaultViewDate</code> rather than today. 
        If this option is not used, “today” remains the default view date.
      `,
    },
    {
      name: '@Input() disableTouchKeyboard: boolean',
      description:
        'If true, no keyboard will show on mobile devices. Default: false.',
    },
    {
      name: '@Input() enableOnReadonly: boolean',
      description:
        'If false the datepicker will not show on a readonly datepicker field. Default: true.',
    },
    {
      name: '@Input() endDate: string',
      description: `
        The latest date that may be selected; all later dates will be disabled. 
        Date should be in local timezone. String must be parsable with <code>format</code>.
      `,
    },
    {
      name: '@Input() forceParse: boolean',
      description: `
        Whether or not to force parsing of the input value when the picker is closed. 
        That is, when an invalid date is left in the input field by the user, the picker will forcibly parse that value, 
        and set the input’s value to the new, valid date, conforming to the given format. Default: true.
      `,
    },
    {
      name: '@Input() format: string',
      description: `The date format, combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.`,
    },
    {
      name: '@Input() immediateUpdates: boolean',
      description: `
        If true, selecting a year or month in the datepicker will update the input value immediately. 
        Otherwise, only selecting a day of the month will update the input value immediately. Default: false.
      `,
    },
    {
      name: '@Input() keyboardNavigation: boolean',
      description: `
        Whether or not to allow date navigation by arrow keys. 
        Keyboard navigation is not supported at all for embedded / inline mode. 
        Also it’s not working if input element hasn’t focus. This could be an issue if used as component 
        or if opened by show method. Default: true.
      `,
    },
    {
      name: '@Input() maxViewMode: string',
      description: `
        Set a maximum limit for the view mode. Accepts: 0 or “days” or “month”, 1 or “months” or “year”, 2 or “years” or “decade”, 
        3 or “decades” or “century”, and 4 or “centuries” or “millenium”. Gives the ability to pick only a day, 
        a month, a year or a decade. The day is set to the 1st for “months”, the month is set to January for “years”, 
        the year is set to the first year from the decade for “decades”, and the year is set to the first from the millennium for “centuries”. 
        Default: 4, “centuries”.
      `,
    },
    {
      name: '@Input() minViewMode: string',
      description: `
        Set a minimum limit for the view mode. Accepts: 0 or “days” or “month”, 1 or “months” or “year”, 2 or “years” or “decade”, 
        3 or “decades” or “century”, and 4 or “centuries” or “millenium”. Gives the ability to pick only a month, a year or a decade. 
        The day is set to the 1st for “months”, and the month is set to January for “years”, the year is set to the first year from 
        the decade for “decades”, and the year is set to the first from the millennium for “centuries”. 
        Default: 0, “days”.
      `,
    },
    {
      name: '@Input() multidate: boolean | number',
      description: `
        Enable multidate picking. Each date in month view acts as a toggle button, keeping track of which dates the user has selected in order. 
        If a number is given, the picker will limit how many dates can be selected to that number, dropping the oldest dates from the 
        list when the number is exceeded. <code>true</code> equates to no limit. The input’s value (if present) is set to a string generated by joining the dates, 
        formatted, with <code>multidateSeparator</code>.
      `,
    },
    {
      name: '@Input() multidateSeparator: string',
      description: `
        The string that will appear between dates when generating the input’s value. When parsing the input’s value for a multidate picker, 
        this will also be used to split the incoming string to separate multiple formatted dates; as such, it is highly recommended that you not use a 
        string that could be a substring of a formatted date (eg, using ‘-‘ to separate dates when your format is ‘yyyy-mm-dd’). Default: “,”.
      `,
    },
    {
      name: '@Input() orientation: string',
      description: `
        A space-separated string consisting of one or two of “left” or “right”, “top” or “bottom”, and “auto” (may be omitted); for example, “top left”, “bottom” 
        (horizontal orientation will default to “auto”), “right” (vertical orientation will default to “auto”), “auto top”. Allows for fixed placement of the 
        picker popup.<br><br>“orientation” refers to the location of the picker popup’s “anchor”; you can also think of it as the location of the trigger element 
        (input, component, etc) relative to the picker.<br><br>“auto” triggers “smart orientation” of the picker. Horizontal orientation will default to “left” and left offset will be tweaked to keep the picker inside the browser viewport; vertical orientation will simply choose “top” or “bottom”, whichever will show more of the picker in the viewport.
      `,
    },
    {
      name: '@Input() showOnFocus: boolean',
      description:
        'If false, the datepicker will be prevented from showing when the input field associated with it receives focus. Default: true.',
    },
    {
      name: '@Input() startDate: string',
      description: `
        The earliest date that may be selected; all earlier dates will be disabled. 
        Date should be in local timezone. String must be parsable with format.
      `,
    },
    {
      name: '@Input() startView: string',
      description: `
        The view that the datepicker should show when it is opened. Accepts: 0 or “days” or “month”, 1 or “months” or “year”, 2 or “years” or “decade”, 
        3 or “decades” or “century”, and 4 or “centuries” or “millenium”. Useful for date-of-birth datepickers. Default: 0, “days”.
      `,
    },
    {
      name: '@Input() showWeekDays: boolean',
      description: `If false, the datepicker will not append the names of the weekdays to its view. Default behavior is appending the weekdays. Default: true.`,
    },
    {
      name: '@Input() title: string',
      description:
        'The string that will appear on top of the datepicker. If empty the title will be hidden.',
    },
    {
      name: '@Input() todayBtn: boolean',
      description: `
        If true or “linked”, displays a “Today” button at the bottom of the datepicker to select the current date. 
        If true, the “Today” button will only move the current date into view; if “linked”, the current date will also be selected.
      `,
    },
    {
      name: '@Input() todayHighlight: boolean',
      description: 'If true, highlights the current date.',
    },
    {
      name: '@Input() weekStart: number',
      description: 'Day of the week start. 0 (Sunday) to 6 (Saturday).',
    },
    {
      name: '@Input() zIndexOffset: number',
      description:
        'The CSS z-index of the open datepicker is the maximum z-index of the input and all of its DOM ancestors plus the <code>zIndexOffset</code>.',
    },
    {
      name: '@Input() utc: boolean',
      description: 'Sets date in utc format.',
    },
    {
      name: '@Input() autocomplete: boolean',
      description: 'Enables or disables form autocomplete on datepicker input.',
    },
  ];

  public events: ApiTableData[] = [
    {
      name: '@Output() focusoutEvent: EventEmitter&lt;FocusEvent&gt;',
      description: 'Focusout event emitter.',
    },
  ];
}
