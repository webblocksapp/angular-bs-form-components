import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';

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
  implements AfterViewInit {
  @HostBinding('class') class = 'ng-datepicker form-group';
  @HostBinding('id') hostId: string;

  @ViewChild('inputElementRef', { read: ElementRef })
  inputElementRef: ElementRef;

  @Input() configs: any = {};

  private datepicker: any;

  setConfigsOnInit(): void {
    this.hostId = this.id + '-host';
  }

  ngAfterViewInit(): void {
    this.initJQueryEl();
    this.initDatepicker();
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
      container: '#' + this.hostId,
    };

    this.setDatepickerConfigsOverrides();
    this.configs = Object.assign(defaultConfigs, this.configs);
  }

  setDatepickerConfigsOverrides(): void {}

  bindEventsToDatepicker(): void {
    this.datepicker.on('show', (event) => {
      console.log('show event');
    });

    this.datepicker.on('hide', (event) => {
      console.log('hide event');
    });

    this.datepicker.on('clearDate', (event) => {
      console.log('clearDate event');
    });

    this.datepicker.on('changeDate', (event) => {
      console.log('changeDate event');
    });

    this.datepicker.on('changeMonth', (event) => {
      console.log('changeMonth event');
    });

    this.datepicker.on('changeYear', (event) => {
      console.log('changeYear event');
    });

    this.datepicker.on('changeDecade', (event) => {
      console.log('changeDecade event');
    });

    this.datepicker.on('changeCentury', (event) => {
      console.log('changeCentury event');
    });
  }
}
