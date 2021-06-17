import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DataInputBase, parseValue, clone } from '@webblocksapp/ng-data-groups';
import { mapSelectOptions } from '../common/utils';
import { CheckDisplay, CheckLook, SelectOption } from '../common/types';

@Component({
  selector: 'bs-checks',
  template: `
    <label class="form-label" *ngIf="label">{{ label }}</label>
    <div class="form-group">
      <div
        class="custom-control custom-checkbox"
        [ngClass]="{
          'custom-control-inline': display === 'inline',
          'is-invalid': error,
          'is-valid': touched && highlightOnValid && !error,
          'custom-checkbox-circle': look === 'circle',
          'custom-switch': look === 'switch'
        }"
        *ngFor="let option of options; let i = index"
      >
        <input
          #checkbox
          type="checkbox"
          class="custom-control-input"
          [ngClass]="{
            'is-invalid': error && !option.disabled,
            'is-valid':
              touched && highlightOnValid && !error && !option.disabled
          }"
          id="{{ id }}-{{ i }}-bs"
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
      :host .custom-checkbox {
        margin-bottom: 0.8rem;
      }

      :host .form-label {
        margin-bottom: 0.7rem;
      }

      :host .invalid-feedback-inline {
        margin-top: -8px;
      }
    `,
  ],
})
export class BsChecksComponent extends DataInputBase implements DoCheck {
  @Input() options: Array<SelectOption>;
  @Input() map: Array<string>;
  @Input() display: CheckDisplay = 'default';
  @Input() look: CheckLook = 'check';

  @ViewChildren('checkbox') checkboxes: QueryList<ElementRef>;

  private _options: Array<SelectOption>;

  ngDoCheck(): void {
    this.watchModel();
  }

  bindWatchModelEvents(): void {
    this.initCheckedOptions();
  }

  detectPropertiesChanges(propName: string): void {
    if (propName === 'disabled') this.enableOrDisableCheckboxes();
    if (propName === 'map') this.mapOptions();
    if (propName === 'options') {
      this.refreshCheckboxes();
    }
  }

  mapOptions(): void {
    this._options = clone(this.options);
    this.options = mapSelectOptions(this._options, this.map);
  }

  bindClickEvents(event: any): any {
    this.refreshCheckboxes();
    this.validateField();
    return event;
  }

  getCheckboxesValues(): Array<any> {
    const values = [];
    this.checkboxes.forEach((checkboxElementRef) => {
      const checkbox = checkboxElementRef.nativeElement;

      if (checkbox.checked === true) {
        values.push(checkbox.value);
      }
    });

    return values;
  }

  enableOrDisableCheckboxes(): void {
    this.options.forEach((option) => {
      const disabled = this.disabled || undefined;
      option.disabled = disabled;
    });
  }

  initCheckedOptions(): void {
    setTimeout(() => {
      this.checkboxes.forEach((checkboxElementRef) => {
        const checkbox = checkboxElementRef.nativeElement;
        const values = this.model.getValue(this.name) || [];

        // tslint:disable-next-line: triple-equals
        const filteredValue = values.filter((value) => value == checkbox.value);

        if (filteredValue.length) {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      });
    });
  }

  refreshCheckboxes(): void {
    if (this.checkboxes !== undefined) {
      const values = this.getCheckboxesValues().map((value) =>
        parseValue(value),
      );
      this.fillModel(values);
    }
  }

  refresh(): void {
    this.initCheckedOptions();
  }
}
