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
        [attr.multiple]="multiple"
        class="form-control select2"
        [ngClass]="{ 'is-invalid': error }"
        id="{{ id }}-bs"
      >
        <option *ngIf="placeholder"></option>
        <ng-container *ngFor="let option of options">
          <option
            *ngIf="option.group === undefined"
            [attr.disabled]="option.disabled"
            [attr.selected]="option.selected"
            [value]="option.value"
          >
            {{ option.viewValue }}
          </option>

          <optgroup *ngIf="option.group !== undefined" [label]="option.group">
            <option
              *ngFor="let option of option.groupValues"
              [attr.disabled]="option.disabled"
              [attr.selected]="option.selected"
              [value]="option.value"
            >
              {{ option.viewValue }}
            </option>
          </optgroup></ng-container
        >
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
  @HostBinding('class') class = 'ng-select2 form-group';
  @ViewChild('select2ElementRef', { read: ElementRef })
  select2ElementRef: ElementRef;

  @Input() theme: string;
  @Input() options: Array<Option> | Array<OptionGroup>;
  @Input() configs: any;
  @Input() multiple: string;
  @Input() noResults: string;

  @Output() selectEvent: EventEmitter<any> = new EventEmitter();
  @Output() clearEvent: EventEmitter<any> = new EventEmitter();
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();

  private select2: any;

  ngAfterViewInit(): void {
    this.initJQueryEl();
    this.initSelect2();
  }

  detectPropertiesChanges(propName: string): void {
    if (propName === 'disabled') this.enableOrDisableSelect2();
    if (propName === 'options') this.enableOrDisableSelect2Options();
  }

  initJQueryEl(): void {
    this.select2 = $(this.select2ElementRef.nativeElement);
  }

  initSelect2(): void {
    this.bindEventsToSelect2();
    this.buildSelect2Configs();
    this.select2.select2(this.configs);
    this.initSelectedOptions();
    this.enableOrDisableSelect2();
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
        this.addOrRemoveIsInvalidClass();
        this.validateField();
        this.closeEvent.emit(event.params.data);
      });
    });
  }

  buildSelect2Configs(): void {
    const defaultConfigs = {
      theme: this.theme,
      placeholder: this.placeholder,
      allowClear: true,
      language: {
        noResults: () => {
          return this.noResults || 'No results found';
        },
      },
    };

    this.configs = Object.assign(defaultConfigs, this.configs);
  }

  addOrRemoveIsInvalidClass(): void {
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

      if (this.error) {
        select2Selection.addClass('custom-select');
        select2Selection.addClass('is-invalid');
      } else {
        select2Selection.removeClass('custom-select');
        select2Selection.removeClass('is-invalid');
      }
    });
  }

  initSelectedOptions(): void {
    setTimeout(() => {
      if (
        this.model !== undefined &&
        this.model.getValue(this.name) !== undefined
      ) {
        if (this.multiple === 'multiple') {
          /**
           * Load selected values when is multiple select
           */
        } else {
          /**
           * Load selected value when is single select
           */
          const selectedOption: any = (this.options as any[]).filter(
            // tslint:disable-next-line: triple-equals
            (option) => option.value == this.model.getValue(this.name),
          );

          if (selectedOption.length) {
            selectedOption[0].selected = true;
          }

          this.refreshSelect2();
        }
      }
    });
  }

  enableOrDisableSelect2(): void {
    if (this.select2 !== undefined && this.disabled !== undefined)
      this.select2.select2('enable', [!this.disabled]);
  }

  enableOrDisableSelect2Options(): void {
    if (this.select2 !== undefined) this.refreshSelect2();
  }

  refreshSelect2(): void {
    setTimeout(() => {
      this.select2.select2(this.configs);
    });
  }

  /**
   * Wildcard method. Executed when data is injected directly through component
   * without using @Input() decorators.
   */
  refresh(): void {
    this.addOrRemoveIsInvalidClass();
  }
}
