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
import { SelectOption, SelectOptionGroup } from '../common/types';
import { isNull } from '../common/utils';
import parseValue from '../common/utils/parse-value';

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
        [attr.multiple]="multiple"
        [attr.name]="name"
        class="form-control selectpicker"
        [ngClass]="{
          disabled: disabled,
          'show-tick': showTick,
          dropup: !dropupAuto
        }"
        id="{{ id }}-bs"
      >
        <ng-container *ngFor="let option of options">
          <option *ngIf="multiple === false" hidden></option>
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
    <div *ngIf="onValidated" class="invalid-feedback">
      {{ error }}
    </div>
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

      .ng-select .input-group-sm > .dropdown > button,
      .ng-select .input-group-lg > .dropdown > button {
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: inherit;
        line-height: initial;
        height: inherit;
      }

      .ng-select .input-group-sm > .dropdown > button > .filter-option,
      .ng-select .input-group-lg > .dropdown > button > .filter-option {
        display: flex;
        align-items: center;
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

  @Input() options: Array<SelectOption> | Array<SelectOptionGroup>;
  @Input() configs: { [key: string]: any } = {};
  @Input() style: string = '';
  @Input() styleBase: string = 'form-control';
  @Input() placeholder = ' ';
  @Input() iconBase: string = 'fontAwesome';
  @Input() selectAllText: string;
  @Input() deselectAllText: string;
  @Input() liveSearch: boolean;
  @Input() multiple: boolean;
  @Input() maxOptions: number;
  @Input() maxOptionsText: string;
  @Input() selectedTextFormat: string;
  @Input() showTick: boolean;
  @Input() countSelectedText: string;
  @Input() actionsBox: boolean;
  @Input() header: string;
  @Input() dropupAuto: string;

  @Output() shownEvent: EventEmitter<Event> = new EventEmitter();
  @Output() hiddenEvent: EventEmitter<Event> = new EventEmitter();

  public onValidated: boolean = false;

  private select: any;
  private onShown: boolean = false;
  private selectConfigs: any = {};
  private watchedProperties: Array<string> = [
    'configs',
    'style',
    'styleBase',
    'placeholder',
    'iconBase',
    'selectAllText',
    'deselectAllText',
    'liveSearch',
    'multiple',
    'maxOptions',
    'maxOptionsText',
    'selectedTextFormat',
    'showTick',
    'countSelectedText',
    'actionsBox',
    'header',
    'dropupAuto',
  ];

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
    if (propName === 'maxOptions') {
      this.refreshSelectedOptions();
    }

    if (propName === 'maxOptionsText') {
      if (isNull(this.maxOptionsText)) this.maxOptionsText = undefined;
    }

    if (propName === 'countSelectedText') {
      if (isNull(this.countSelectedText)) this.countSelectedText = undefined;
    }

    if (propName === 'deselectAllText') {
      if (isNull(this.deselectAllText)) this.deselectAllText = undefined;
    }

    if (propName === 'selectAllText') {
      if (isNull(this.selectAllText)) this.selectAllText = undefined;
    }

    if (propName === 'header') {
      if (isNull(this.header)) this.header = undefined;
    }

    if (this.watchedProperties.indexOf(propName) > -1) {
      this.rebuildSelect();

      // Code events that must be placed after rebuildSelect
      if (!isNull(this.maxOptions)) this.hideSelectAllButton();
    }
  }

  initJQueryEl(): void {
    this.select = $(this.selectElementRef.nativeElement);
  }

  initSelect(): void {
    this.buildSelectConfigs();
    this.select.selectpicker(this.selectConfigs);
    this.enableOrDisableSelect();
    this.addAutoCloseClass();
    this.bindEventsToSelect();
  }

  buildSelectConfigs(): void {
    const defaultConfigs = {
      style: this.style,
      styleBase: this.styleBase,
      title: this.placeholder,
      iconBase: this.iconBase,
      selectAllText: this.selectAllText,
      deselectAllText: this.deselectAllText,
      liveSearch: this.liveSearch,
      multiple: this.multiple,
      maxOptions: this.maxOptions,
      maxOptionsText: this.maxOptionsText,
      selectedTextFormat: this.selectedTextFormat,
      showTick: this.showTick,
      countSelectedText: this.countSelectedText,
      actionsBox: this.actionsBox,
      header: this.header,
      dropupAuto: this.dropupAuto,
    };

    this.selectConfigs = Object.assign(this.selectConfigs, defaultConfigs);
    this.setSelectConfigsOverrides();
  }

  setSelectConfigsOverrides(): void {
    this.selectConfigs = Object.assign(this.selectConfigs, this.configs);
  }

  disableSelectWhenOptionsAreEmpty(): void {
    if (this.select !== undefined && isNull(this.options)) {
      this.select.prop('disabled', true);
      this.refreshSelect();
    }
  }

  enableOrDisableSelect(): void {
    if (this.select !== undefined) {
      setTimeout(() => {
        if (this.disabled === undefined) this.disabled = false;
        this.select.prop('disabled', this.disabled);
        this.refreshSelect();
      });
    }
  }

  bindEventsToSelect(): void {
    this.select.on('change', this.select, (event) => {
      const value = parseValue(this.select.val());
      this.onShown = false;
      this.fillModel(value);
      this.validateField();
      this.change(event);
    });

    this.select.parent().on('shown.bs.dropdown', (event) => {
      this.onShown = true;
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
      this.addOrRemoveValidationClasses();
      this.setOnValidated();
    }
  }

  addAutoCloseClass(): void {
    this.select.parent().find('.dropdown-menu').addClass('js-auto-close');
  }

  addOrRemoveValidationClasses(): void {
    const inputGroup = this.select.closest('.input-group');
    const selectButton = this.select.parent().find('button.form-control');

    if (this.error) {
      inputGroup.addClass('is-invalid');
      selectButton.addClass('is-invalid');
    } else {
      inputGroup.removeClass('is-invalid');
      selectButton.removeClass('is-invalid');

      if (this.highlightOnValid && this.touched) {
        inputGroup.addClass('is-valid');
        selectButton.addClass('is-valid');
      }

      if (!this.highlightOnValid || !this.touched) {
        inputGroup.removeClass('is-valid');
        selectButton.removeClass('is-valid');
      }
    }
  }

  refreshSelectedOptions(): void {
    if (this.model !== undefined) {
      const selectedOptions = [];
      const currentSelectedOptions = this.model.getValue(this.name) || [];
      currentSelectedOptions.forEach((value) => {
        if (selectedOptions.length < this.maxOptions) {
          selectedOptions.push(value);
        }
      });

      this.fillModel(selectedOptions);
    }
  }

  initSelectedOptions(): void {
    this.select.selectpicker('val', this.model.getValue(this.name));
  }

  hideSelectAllButton(): void {
    if (this.select !== undefined) {
      setTimeout(() => {
        this.select
          .parent()
          .find('.bs-actionsbox > .btn-group > .bs-select-all')
          .remove();
      });
    }
  }

  refreshSelect(): void {
    if (this.select !== undefined) {
      setTimeout(() => {
        this.select.selectpicker('refresh');
      });
    }
  }

  rebuildSelect(): void {
    if (this.select !== undefined) {
      setTimeout(() => {
        this.select.selectpicker('destroy');
        this.initSelect();
        this.addOrRemoveValidationClasses();
        this.initSelectedOptions();
      });
    }
  }

  setOnValidated(): void {
    this.ngZone.run(() => {
      this.onValidated = true;
    });
  }

  refresh(): void {
    if (this.model.getSubmitted()) {
      this.setOnValidated();
    }

    this.addOrRemoveValidationClasses();
  }
}
