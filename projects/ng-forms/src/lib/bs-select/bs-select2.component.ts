import {
  Component,
  HostBinding,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';
import { Option, OptionGroup } from '../common/types';

@Component({
  selector: 'bs-select2',
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

      <select
        #select2ElementRef
        style="width: 100%"
        [attr.name]="name"
        [attr.value]="value"
        [attr.placeholder]="placeholder"
        class="form-control select2"
        [ngClass]="{ 'is-invalid': error }"
        id="{{ id }}-bs"
      >
        <option *ngIf="placeholder"></option>
        <ng-container *ngFor="let option of options">
          <option
            *ngIf="option.group === undefined"
            [attr.disabled]="option.disabled"
            [value]="option.value"
          >
            {{ option.viewValue }}
          </option>
        </ng-container>
      </select>

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
  styleUrls: ['./bs-select2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BsSelect2Component extends DataInputBase implements AfterViewInit {
  @HostBinding('class') class = 'form-group';
  @ViewChild('select2ElementRef', { read: ElementRef })
  select2ElementRef: ElementRef;

  @Input() theme: string;
  @Input() options: Array<Option> | Array<OptionGroup>;
  @Input() configs: any;

  @Output() selectEvent: EventEmitter<any> = new EventEmitter();
  @Output() clearEvent: EventEmitter<any> = new EventEmitter();
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  private select2: any;

  ngAfterViewInit(): void {
    this.initJQueryEl();
    this.initSelect2();
  }

  initJQueryEl(): void {
    this.select2 = $(this.select2ElementRef.nativeElement);
  }

  initSelect2(): void {
    this.bindEventsToSelect2();
    const configs = this.buildSelect2Configs();
    this.select2.select2(configs);
  }

  bindEventsToSelect2(): void {
    this.select2.on('change', (event) => {
      this.change(event);
    });

    this.select2.on('select2:select', (event) => {
      const value = event.params.data.id;
      this.fillModel(value);
      this.validateField();
      this.selectEvent.emit(event.params.data);
    });

    this.select2.on('select2:clear', (event) => {
      this.fillModel(null);
      this.validateField();
      this.clearEvent.emit(event.params.data);
    });

    this.select2.on('select2:close', (event) => {
      /**
       * Equivalent to a validate on focusout
       */
      setTimeout(() => {
        this.addIsInvalidClass(event);
        this.validateField();
        this.closeEvent.emit(event.params.data);
      });
    });
  }

  addIsInvalidClass(event): void {
    setTimeout(() => {
      /**
       * For a custom bootstrap theme, make the border-color property important inside this
       * style line of css classes on your bootstrap custom main theme stylesheet,
       * to show the invalid border color on select2 component
       *
       * .was-validated .custom-select:invalid, .custom-select.is-invalid {
       *   border-color: #your-color !important;
       * }
       */

      const select2Selection = $(this.select2.data('select2').$container).find(
        '.select2-selection',
      );

      if (event.target.classList.contains('is-invalid')) {
        select2Selection.addClass('custom-select');
        select2Selection.addClass('is-invalid');
      } else {
        select2Selection.removeClass('custom-select');
        select2Selection.removeClass('is-invalid');
      }
    });
  }

  buildSelect2Configs(): any {
    const defaultConfigs = {
      theme: this.theme,
      placeholder: this.placeholder,
      allowClear: true,
    };

    return Object.assign(defaultConfigs, this.configs);
  }
}
