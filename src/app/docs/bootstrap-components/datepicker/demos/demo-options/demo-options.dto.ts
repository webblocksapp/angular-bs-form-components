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
  immediateUpdates: string = 'no';
  maxViewMode: string = 'months';
}
