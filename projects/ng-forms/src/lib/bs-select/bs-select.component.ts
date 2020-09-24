import {
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
  ViewEncapsulation,
  Input,
  AfterViewInit,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';
import { Option, OptionGroup } from '../common/types';

@Component({
  selector: 'bs-select',
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
        #selectElementRef
        style="width: 100%"
        [attr.name]="name"
        [attr.value]="value"
        [attr.title]="placeholder"
        [attr.multiple]="multiple"
        class="form-control selectpicker"
        [ngClass]="{ 'is-invalid': error }"
        id="{{ id }}-bs"
      >
        <ng-container *ngFor="let option of options">
          <option
            *ngIf="placeholder && multiple !== 'multiple'"
            hidden
          ></option>
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
export class BsSelectComponent extends DataInputBase implements AfterViewInit {
  @HostBinding('class') class = 'ng-select form-group';
  @ViewChild('selectElementRef', { read: ElementRef })
  selectElementRef: ElementRef;

  @Input() options: Array<Option> | Array<OptionGroup>;
  @Input() configs: any = {};
  @Input() multiple: string;

  private select: any;

  ngAfterViewInit(): void {
    this.initJQueryEl();
    this.initSelect();
  }

  initJQueryEl(): void {
    this.select = $(this.selectElementRef.nativeElement);
  }

  initSelect(): void {
    this.buildSelectConfigs();
    this.select.selectpicker(this.configs);
    this.addAutoCloseClass();
    this.bindEventsToSelect();
  }

  buildSelectConfigs(): void {
    const defaultConfigs = {
      style: '',
      styleBase: 'form-control',
    };

    this.configs = Object.assign(defaultConfigs, this.configs);
  }

  bindEventsToSelect(): void {}

  addAutoCloseClass(): void {
    this.select.parent().find('.dropdown-menu').addClass('js-auto-close');
  }
}
