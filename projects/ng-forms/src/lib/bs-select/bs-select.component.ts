import {
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
  ViewEncapsulation,
  Input,
  AfterViewInit,
  DoCheck,
  Output,
  EventEmitter,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';
import { Option, OptionGroup } from '../common/types';
import { isNull } from '../common/utils';

@Component({
  selector: 'bs-select',
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
      <select
        #selectElementRef
        style="width: 100%"
        [attr.name]="name"
        [value]="value"
        [attr.title]="placeholder"
        [attr.multiple]="multiple"
        [attr.data-live-search]="liveSearch"
        [attr.data-max-options]="maxOptions"
        [attr.data-max-options-text]="maxOptionsText"
        [attr.data-selected-text-format]="selectedTextFormat"
        [attr.data-count-selected-text]="countSelectedText"
        [attr.data-actions-box]="actionsBox"
        [attr.data-header]="dataHeader"
        [attr.data-dropup-auto]="direction === 'up' ? false : true"
        class="form-control selectpicker"
        [ngClass]="{
          'is-invalid': error,
          'is-valid': touched && highlightOnValid && !error,
          disabled: disabled,
          'show-tick': showTick,
          dropup: direction === 'up'
        }"
        id="{{ id }}-bs"
      >
        <ng-container *ngFor="let option of options">
          <option *ngIf="placeholder && multiple === false" hidden></option>
          <option
            *ngIf="option.group === undefined"
            [attr.disabled]="option.disabled"
            [attr.selected]="option.selected"
            [attr.data-tokens]="option.keyWords"
            [attr.title]="option.title"
            [attr.class]="option.class"
            [attr.data-icon]="option.icon"
            [attr.data-content]="option.content"
            [attr.data-subtext]="option.subtext"
            [ngStyle]="option.style"
            [attr.value]="option.value"
            [attr.data-divider]="option.divider"
          >
            {{ option.viewValue }}
          </option>

          <optgroup
            *ngIf="option.group !== undefined"
            [label]="option.group"
            [attr.data-max-options]="option.maxOptions"
            [attr.data-icon]="option.icon"
          >
            <option
              *ngFor="let option of option.groupValues"
              [attr.disabled]="option.disabled"
              [attr.selected]="option.selected"
              [attr.data-tokens]="option.keyWords"
              [attr.title]="option.title"
              [attr.class]="option.class"
              [attr.data-icon]="option.icon"
              [attr.data-content]="option.content"
              [attr.data-subtext]="option.subtext"
              [ngStyle]="option.style"
              [attr.value]="option.value"
              [attr.data-divider]="option.divider"
            >
              {{ option.viewValue }}
            </option>
          </optgroup>
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
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ng-select.form-group {
        display: block;
      }

      .ng-select .bootstrap-select .dropdown-menu.inner {
        display: initial;
      }

      .ng-select .dropdown-menu .dropdown-menu {
        visibility: initial;
      }

      .ng-select .dropdown-toggle:focus {
        outline: 0 !important;
      }
    `,
  ],
})
export class BsSelectComponent
  extends DataInputBase
  implements AfterViewInit, DoCheck {
  @HostBinding('class') class = 'ng-select form-group';
  @ViewChild('selectElementRef', { read: ElementRef })
  selectElementRef: ElementRef;

  @Input() options: Array<Option> | Array<OptionGroup>;
  @Input() configs: any = {};
  @Input() multiple: boolean;
  @Input() liveSearch: boolean;
  @Input() maxOptions: number;
  @Input() maxOptionsText: string;
  @Input() selectedTextFormat: string;
  @Input() countSelectedText: string;
  @Input() showTick: boolean;
  @Input() iconBase: string;
  @Input() actionsBox: boolean;
  @Input() deselectAllText: string;
  @Input() selectAllText: string;
  @Input() dataHeader: string;
  @Input() direction: string;

  @Output() shownEvent: EventEmitter<any> = new EventEmitter();
  @Output() hiddenEvent: EventEmitter<any> = new EventEmitter();

  private select: any;
  private onShown = false;

  ngAfterViewInit(): void {
    this.initJQueryEl();
    this.initSelect();
  }

  ngDoCheck(): void {
    this.watchModel();
  }

  bindWatchModelEvents(): void {
    this.initSelectedOptions();
  }

  detectPropertiesChanges(propName: string): void {
    if (propName === 'disabled') this.enableOrDisableSelect();
    if (propName === 'options') {
      this.refreshSelect();
      this.disableSelectWhenOptionsAreEmpty();
    }
  }

  initJQueryEl(): void {
    this.select = $(this.selectElementRef.nativeElement);
  }

  initSelect(): void {
    this.buildSelectConfigs();
    this.select.selectpicker(this.configs);
    this.enableOrDisableSelect();
    this.addAutoCloseClass();
    this.bindEventsToSelect();
  }

  buildSelectConfigs(): void {
    const defaultConfigs = {
      style: '',
      styleBase: 'form-control',
      iconBase: 'fontAwesome',
    };

    this.setSelectConfigsOverrides();
    this.configs = Object.assign(defaultConfigs, this.configs);
  }

  setSelectConfigsOverrides(): void {
    if (this.iconBase !== 'undefined') {
      this.configs = Object.assign(this.configs, { iconBase: this.iconBase });
    }

    if (this.selectAllText !== 'undefined') {
      this.configs = Object.assign(this.configs, {
        selectAllText: this.selectAllText,
      });
    }

    if (this.deselectAllText !== 'undefined') {
      this.configs = Object.assign(this.configs, {
        deselectAllText: this.deselectAllText,
      });
    }
  }

  disableSelectWhenOptionsAreEmpty(): void {
    if (this.select !== undefined && isNull(this.options)) {
      this.select.prop('disabled', true);
      this.refreshSelect();
    }
  }

  enableOrDisableSelect(): void {
    if (this.select !== undefined && this.disabled !== undefined) {
      this.select.prop('disabled', this.disabled);
      this.refreshSelect();
    }
  }

  bindEventsToSelect(): void {
    this.select.on('change', this.select, (event) => {
      const value = this.select.val();
      this.onShown = false;
      this.fillModel(value);
      this.validateField();
      this.change(event);
    });

    this.select.parent().on('shown.bs.dropdown', (event) => {
      this.onShown = true;

      if (isNull(this.model.getValue(this.name))) {
        this.validateField();
      }

      this.shownEvent.emit(event);
    });

    this.select.parent().on('hidden.bs.select', (event) => {
      this.onShown = false;

      if (isNull(this.model.getValue(this.name))) {
        this.validateField();
      }

      this.hiddenEvent.emit(event);
    });
  }

  bindEventsAfterValidateField(): void {
    if (this.onShown === false) {
      this.addOrRemoveIsInvalidClass();
    }
  }

  addAutoCloseClass(): void {
    this.select.parent().find('.dropdown-menu').addClass('js-auto-close');
  }

  addOrRemoveIsInvalidClass(): void {
    const inputGroup = this.select.closest('.input-group');
    const selectButton = this.select.parent().find('button.form-control');

    if (this.error) {
      inputGroup.addClass('is-invalid');
      selectButton.addClass('is-invalid');
    } else {
      inputGroup.removeClass('is-invalid');
      selectButton.removeClass('is-invalid');
    }
  }

  initSelectedOptions(): void {
    this.select.selectpicker('val', this.model.getValue(this.name));
  }

  refreshSelect(): void {
    if (this.select !== undefined) {
      setTimeout(() => {
        this.select.selectpicker('refresh');
      });
    }
  }

  refresh(): void {
    this.addOrRemoveIsInvalidClass();
  }
}
