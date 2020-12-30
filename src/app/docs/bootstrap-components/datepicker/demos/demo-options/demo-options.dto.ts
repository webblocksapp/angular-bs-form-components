export class DemoOptionsDto {
  highlightOnValid: string = 'yes';
  clearBtn: string = 'no';
  size: string = 'default';
  autoclose: string = 'yes';
  calendarWeeks: string = 'no';
  daysOfWeekDisabled: Array<number>;
  daysOfWeekHighlighted: Array<number>;
  enableOnReadonly: string = 'yes';
  readonly: string = 'no';
  disabled: string = 'no';
  endDate: string;
  format: string = 'yyyy-mm-dd';
  placeholder: string = 'YYYY-MM-DD';
  immediateUpdates: string = 'no';
  maxViewMode: string = 'months';
  minViewMode: string = 'days';
  orientation: string = 'auto';
  showOnFocus: string = 'yes';
  startDate: string;
  showWeekDays: string = 'yes';
  todayBtn: string = 'no';
  todayHighlight: string = 'no';
  weekStart: string = '0';
}
