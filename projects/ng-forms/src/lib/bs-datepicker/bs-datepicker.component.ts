import {
  AfterViewInit,
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
      [ngClass]="{ 'is-invalid': error }"
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
        class="form-control"
        [ngClass]="{ 'is-invalid': error }"
        id="{{ id }}-bs"
        (focusout)="focusout($event)"
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
export class BsDatepickerComponent
  extends DataInputBase
  implements AfterViewInit, DoCheck {
  @HostBinding('class') class = 'ng-datepicker form-group';
  @HostBinding('id') hostId: string;

  @ViewChild('inputElementRef', { read: ElementRef })
  inputElementRef: ElementRef;

  @Input() configs: any = {};
  @Input() autoclose = true;
  @Input() calendarWeeks = false;
  @Input() clearBtn = false;
  @Input() datesDisabled: Array<string> | string;
  @Input() daysOfWeekDisabled: Array<string> | string;
  @Input() daysOfWeekHighlighted: Array<string> | string;
  @Input() defaultViewDate = 'day';
  @Input() disableTouchKeyboard = false;
  @Input() enableOnReadonly = true;
  @Input() endDate: string;
  @Input() forceParse = true;
  @Input() format = 'yyyy-mm-dd';
  @Input() immediateUpdates = false;
  @Input() keyboardNavigation = true;
  @Input() maxViewMode = 'centuries';
  @Input() minViewMode = 'days';
  @Input() multidate = false;
  @Input() multidateSeparator: ', ';
  @Input() orientation: 'auto';
  @Input() showOnFocus = true;
  @Input() startDate: string;
  @Input() startView = 'days';
  @Input() showWeekDays = true;
  @Input() title: string;
  @Input() todayBtn = false;
  @Input() todayHighlight = false;
  @Input() weekStart = 0;
  @Input() zIndexOffset = 10;
  @Input() utc = false;
  @Input() autocomplete = false;

  @Output() showEvent: EventEmitter<any> = new EventEmitter();
  @Output() hideEvent: EventEmitter<any> = new EventEmitter();
  @Output() clearDateEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeDateEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeMonthEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeYearEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeDecadeEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeCenturyEvent: EventEmitter<any> = new EventEmitter();

  private datepicker: any;

  setConfigsOnInit(): void {
    this.hostId = this.id + '-host';
  }

  ngAfterViewInit(): void {
    this.initJQueryEl();
    this.initDatepicker();
  }

  bindFocusoutEvents(event: any): any {
    const value = this.getValue();
    this.fillModel(value);

    setTimeout(() => {
      if (!isNull(value)) {
        this.validateField();
      }
    }, 100);

    return event;
  }

  detectPropertiesChanges(propName: string): void {
    if (this.datepicker !== undefined) {
      if (propName === 'startDate') this.setStartDate();
      if (propName === 'endDate') this.setEndDate();
      if (propName === 'datesDisabled') this.setDatesDisabled();
      if (propName === 'daysOfWeekDisabled') this.setDaysOfWeekDisabled();
      if (propName === 'daysOfWeekHighlighted') this.setDaysOfWeekHighlighted();
    }
  }

  setStartDate(): void {
    this.datepicker.datepicker('setStartDate', this.startDate);
  }

  setEndDate(): void {
    this.datepicker.datepicker('setEndDate', this.endDate);
  }

  setDatesDisabled(): void {
    this.datepicker.datepicker('setDatesDisabled', this.datesDisabled);
  }

  setDaysOfWeekDisabled(): void {
    this.datepicker.datepicker(
      'setDaysOfWeekDisabled',
      this.daysOfWeekDisabled,
    );
  }

  setDaysOfWeekHighlighted(): void {
    this.datepicker.datepicker(
      'setDaysOfWeekHighlighted',
      this.daysOfWeekHighlighted,
    );
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
    this.datepicker.datepicker(this.configs);
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

    this.setDatepickerConfigsOverrides();
    this.configs = Object.assign(defaultConfigs, this.configs);
  }

  setDatepickerConfigsOverrides(): void {}

  bindEventsToDatepicker(): void {
    this.datepicker.on('show', (event) => {
      this.showEvent.emit(event);
    });

    this.datepicker.on('hide', (event) => {
      const value = this.getValue();

      if (isNull(value)) {
        this.validateField();
      }

      this.hideEvent.emit(event);
    });

    this.datepicker.on('clearDate', (event) => {
      this.clearDateEvent.emit(event);
    });

    this.datepicker.on('changeDate', (event) => {
      const value = this.getValue();

      this.fillModel(value);
      this.validateField();

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

    if (value !== undefined) {
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

  refresh(): void {
    this.datepicker.datepicker('update', this.value);
  }
}
