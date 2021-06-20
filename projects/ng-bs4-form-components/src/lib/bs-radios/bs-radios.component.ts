import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DataInputBase, parseValue, clone } from '@webblocksapp/ng-data-groups';
import { mapSelectOptions } from '../common/utils';
import { RadioDisplay, RadioLook, SelectOption } from '../common/types';

@Component({
  selector: 'bs-radios',
  template: `
    <label class="form-label" *ngIf="label">{{ label }}</label>
    <div class="form-group">
      <div
        class="custom-control custom-radio"
        [ngClass]="{
          'custom-control-inline': display === 'inline',
          'is-invalid': error,
          'is-valid': touched && highlightOnValid && !error,
          'custom-radio-rounded': look === 'radio',
          'custom-switch': look === 'switch'
        }"
        *ngFor="let option of options; let i = index"
      >
        <input
          #radio
          type="radio"
          class="custom-control-input"
          [ngClass]="{
            'is-invalid': error && !option.disabled,
            'is-valid':
              touched && highlightOnValid && !error && !option.disabled
          }"
          id="{{ id }}-{{ i }}-bs"
          name="{{ name }}-{{ id }}-bs[]"
          [value]="option.value"
          [attr.checked]="option.checked"
          [attr.disabled]="option.disabled || undefined"
          (click)="click($event)"
          (change)="change($event)"
        />
        <label class="custom-control-label" for="{{ id }}-{{ i }}-bs">
          {{ option.viewValue }}
        </label>
        <ng-container *ngIf="i === options.length - 1 && display === 'default'">
          <div *ngIf="error" class="invalid-feedback">{{ error }}</div>
        </ng-container>
      </div>
      <ng-container *ngIf="display === 'inline'">
        <div *ngIf="error" class="invalid-feedback invalid-feedback-inline">
          {{ error }}
        </div>
      </ng-container>
      <small *ngIf="help" class="form-text text-muted">
        {{ help }}
      </small>
    </div>
  `,
  styles: [
    `
      :host .custom-radio {
        margin-bottom: 0.8rem;
      }

      :host .form-label {
        margin-bottom: 0.5rem;
      }

      :host .invalid-feedback-inline {
        margin-top: -8px;
      }
    `,
  ],
})
export class BsRadiosComponent extends DataInputBase {
  @Input() options: Array<any>;
  @Input() map: Array<string>;
  @Input() display: RadioDisplay = 'default';
  @Input() look: RadioLook = 'radio';

  @ViewChildren('radio') radios: QueryList<ElementRef>;

  private _options: Array<SelectOption>;

  bindWatchModelEvents(): void {
    this.initCheckedOption();
  }

  detectPropertiesChanges(propName: string): void {
    if (propName === 'disabled') this.enableOrDisableRadios();
    if (propName === 'map') this.mapOptions();
    if (propName === 'options') {
      this.refreshRadios();
    }
  }

  mapOptions(): void {
    this._options = clone(this.options);
    this.options = mapSelectOptions(this._options, this.map);
  }

  bindClickEvents(event: any): any {
    this.refreshRadios();
    this.validateField();
    return event;
  }

  getRadiosValue(): any {
    let value;

    this.radios.forEach((radioElementRef) => {
      const radio = radioElementRef.nativeElement;

      if (radio.checked === true) {
        value = radio.value;
      }
    });

    return value;
  }

  enableOrDisableRadios(): void {
    this.options.forEach((option) => {
      const disabled = this.disabled || undefined;
      option.disabled = disabled;
    });
  }

  initCheckedOption(): void {
    setTimeout(() => {
      this.radios.forEach((radioElementRef) => {
        const radio = radioElementRef.nativeElement;
        const value = this.value;

        // tslint:disable-next-line: triple-equals
        if (radio.value == value) {
          radio.checked = true;
        } else {
          radio.checked = false;
        }
      });
    });
  }

  refreshRadios(): void {
    if (this.radios !== undefined) {
      const value = parseValue(this.getRadiosValue());
      this.fillModel(value);
    }
  }

  refresh(): void {
    this.initCheckedOption();
  }
}
