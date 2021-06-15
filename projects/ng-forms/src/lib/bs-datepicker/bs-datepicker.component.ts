import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation,
  EventEmitter,
  DoCheck,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';
import { isNull } from '../common/utils';

@Component({
  selector: 'bs-datepicker',
  template: `
    <label class="form-label" *ngIf="label" attr.for="{{ id }}-bs">{{
      label
    }}</label>
    <div
      class="input-group {{ inputSize }}"
      [ngClass]="{
        'is-invalid': error,
        'is-valid': touched && highlightOnValid && !error
      }"
    >
      <div *ngIf="startSlot" class="input-group-prepend">
        <span class="input-group-text">{{ startSlot }}</span>
      </div>
      <div *ngIf="startSlotHtml" class="input-group-prepend">
        <span class="input-group-text" [innerHTML]="startSlotHtml"></span>
      </div>
      <input
        #inputElementRef
        [attr.name]="name"
        [attr.value]="value"
        [attr.placeholder]="placeholder"
        [attr.disabled]="disabled"
        [attr.readonly]="readonly"
        class="form-control"
        [ngClass]="{
          'is-invalid': error,
          'is-valid': touched && highlightOnValid && !error
        }"
        id="{{ id }}-bs"
        (focusout)="focusout($event)"
        (focus)="focus($event)"
      />

      <div *ngIf="endSlot" class="input-group-append">
        <span class="input-group-text">{{ endSlot }}</span>
      </div>
      <div *ngIf="endSlotHtml" class="input-group-append">
        <span class="input-group-text">{{ endSlotHtml }}</span>
      </div>
    </div>
    <small *ngIf="help" class="form-text text-muted">
      {{ help }}
    </small>
    <div *ngIf="error" class="invalid-feedback">{{ error }}</div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ng-datepicker {
        position: relative;
      }

      .ng-datepicker.form-group {
        display: block;
      }

      .ng-datepicker .datepicker td {
        padding: 5px;
      }

      .ng-datepicker .datepicker.dropdown-menu {
        font-size: 14px;
      }
    `,
  ],
})
export class BsDatepickerComponent extends DataInputBase implements DoCheck {
  @HostBinding('class') class = 'ng-datepicker form-group';
  @HostBinding('id') hostId: string;

  @ViewChild('inputElementRef', { read: ElementRef })
  inputElementRef: ElementRef;

  @Input() configs: { [key: string]: string } = {};
  @Input() autoclose: boolean = true;
  @Input() calendarWeeks: boolean = false;
  @Input() clearBtn: boolean = false;
  @Input() datesDisabled: Array<string> | string;
  @Input() daysOfWeekDisabled: Array<string> | string;
  @Input() daysOfWeekHighlighted: Array<string> | string;
  @Input() defaultViewDate: string = 'day';
  @Input() disableTouchKeyboard: boolean = false;
  @Input() enableOnReadonly: boolean = true;
  @Input() endDate: string;
  @Input() forceParse: boolean = true;
  @Input() format: string = 'yyyy-mm-dd';
  @Input() immediateUpdates: boolean = false;
  @Input() keyboardNavigation: boolean = true;
  @Input() maxViewMode: string = 'centuries';
  @Input() minViewMode: string = 'days';
  @Input() multidate: boolean | number = false;
  @Input() multidateSeparator: string = ', ';
  @Input() orientation: 'left' | 'right' | 'top' | 'bottom' | 'auto' = 'auto';
  @Input() showOnFocus: boolean = true;
  @Input() startDate: string;
  @Input() startView: string = 'days';
  @Input() showWeekDays: boolean = true;
  @Input() title: string;
  @Input() todayBtn: boolean = false;
  @Input() todayHighlight: boolean = false;
  @Input() weekStart: number = 0;
  @Input() zIndexOffset: number = 10;
  @Input() utc: boolean = false;
  @Input() autocomplete: boolean = false;

  @Output() showEvent: EventEmitter<any> = new EventEmitter();
  @Output() hideEvent: EventEmitter<any> = new EventEmitter();
  @Output() clearDateEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeDateEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeMonthEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeYearEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeDecadeEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeCenturyEvent: EventEmitter<any> = new EventEmitter();

  private datepicker: any;
  private datepickerConfigs: any = {};
  private watchedProperties = [
    'configs',
    'autoclose',
    'calendarWeeks',
    'clearBtn',
    'datesDisabled',
    'daysOfWeekDisabled',
    'daysOfWeekHighlighted',
    'defaultViewDate',
    'disableTouchKeyboard',
    'enableOnReadonly',
    'endDate',
    'forceParse',
    'format',
    'immediateUpdates',
    'keyboardNavigation',
    'maxViewMode',
    'minViewMode',
    'multidate',
    'multidateSeparator',
    'orientation',
    'showOnFocus',
    'startDate',
    'startView',
    'showWeekDays',
    'title',
    'todayBtn',
    'todayHighlight',
    'weekStart',
    'zIndexOffset',
    'utc',
    'autocomplete',
  ];

  setConfigsOnInit(): void {
    this.hostId = this.id + '-host';
  }

  setConfigsAfterViewInit(): void {
    this.initJQueryEl();
    this.initDatepicker();
  }

  detectPropertiesChanges(propName: string): void {
    if (this.datepicker !== undefined) {
      if (this.watchedProperties.indexOf(propName) > -1)
        this.refreshDatepicker();
    }
  }

  ngDoCheck(): void {
    this.watchModel();
  }

  bindWatchModelEvents(): void {
    this.initSelectedDate();
  }

  initSelectedDate(): void {
    this.setValue();
  }

  initJQueryEl(): void {
    this.datepicker = $(this.inputElementRef.nativeElement);
  }

  initDatepicker(): void {
    this.buildDatepickerConfigs();
    this.datepicker.datepicker(this.datepickerConfigs);
    this.bindEventsToDatepicker();
  }

  buildDatepickerConfigs(): void {
    const defaultConfigs = {
      autoclose: this.autoclose,
      container: '#' + this.hostId,
      calendarWeeks: this.calendarWeeks,
      clearBtn: this.clearBtn,
      defaultViewDate: this.defaultViewDate,
      disableTouchKeyboard: this.disableTouchKeyboard,
      datesDisabled: this.datesDisabled,
      daysOfWeekDisabled: this.daysOfWeekDisabled,
      daysOfWeekHighlighted: this.daysOfWeekHighlighted,
      enableOnReadonly: this.enableOnReadonly,
      endDate: this.endDate,
      forceParse: this.forceParse,
      format: this.format,
      immediateUpdates: this.immediateUpdates,
      keyboardNavigation: this.keyboardNavigation,
      maxViewMode: this.maxViewMode,
      minViewMode: this.minViewMode,
      multidate: this.multidate,
      multidateSeparator: this.multidateSeparator,
      orientation: this.orientation,
      showOnFocus: this.showOnFocus,
      startDate: this.startDate,
      startView: this.startView,
      showWeekDays: this.showWeekDays,
      title: this.title,
      todayBtn: this.todayBtn,
      todayHighlight: this.todayHighlight,
      weekStart: this.weekStart,
      zIndexOffset: this.zIndexOffset,
    };

    this.datepickerConfigs = Object.assign(
      this.datepickerConfigs,
      defaultConfigs,
    );
    this.setDatepickerConfigsOverrides();
  }

  setDatepickerConfigsOverrides(): void {
    this.datepickerConfigs = Object.assign(
      this.datepickerConfigs,
      this.configs,
    );
  }

  bindEventsToDatepicker(): void {
    this.datepicker.on('show', (event) => {
      this.showEvent.emit(event);
    });

    this.datepicker.on('hide', (event) => {
      const value = this.getValue();
      this.fillModel(value);
      this.validateField();
      this.hideEvent.emit(event);
    });

    this.datepicker.on('clearDate', (event) => {
      this.clearDateEvent.emit(event);
    });

    this.datepicker.on('changeDate', (event) => {
      this.changeDateEvent.emit(event);
    });

    this.datepicker.on('changeMonth', (event) => {
      this.changeMonthEvent.emit(event);
    });

    this.datepicker.on('changeYear', (event) => {
      this.changeYearEvent.emit(event);
    });

    this.datepicker.on('changeDecade', (event) => {
      this.changeDecadeEvent.emit(event);
    });

    this.datepicker.on('changeCentury', (event) => {
      this.changeCenturyEvent.emit(event);
    });

    /**
     * Disables autocomplete
     */
    if (this.autocomplete === false) {
      this.datepicker.attr('autocomplete', 'off');
    }
  }

  getValue(): any {
    if (this.multidate === true) {
      return this.getDates();
    }

    return this.getDate();
  }

  setValue(): void {
    const value = this.model.getValue(this.name);

    if (!isNull(value)) {
      if (this.multidate === true) {
        this.setDates(value);
      }

      this.setDate(value);
    }
  }

  setDate(value): void {
    if (this.utc === true) {
      this.datepicker.datepicker('setUTCDate', value);
    }

    this.datepicker.datepicker('setDate', value);
  }

  setDates(value): void {
    if (this.utc === true) {
      this.datepicker.datepicker('setUTCDates', value);
    }

    this.datepicker.datepicker('setDates', value);
  }

  getDate(): any {
    if (this.utc === true) {
      return this.datepicker.datepicker('getUTCDate');
    }

    return this.datepicker.datepicker('getDate');
  }

  getDates(): any {
    if (this.utc === true) {
      return this.datepicker.datepicker('getUTCDates');
    }

    return this.datepicker.datepicker('getDates');
  }

  refreshDatepicker(): void {
    this.datepicker.datepicker('destroy');
    this.initDatepicker();
    this.datepicker.datepicker('update', this.model.getValue(this.name));
  }

  refresh(): void {
    this.datepicker.datepicker('update', this.model.getValue(this.name));
  }
}
