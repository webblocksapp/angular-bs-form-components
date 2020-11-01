import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';

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
          'custom-checkbox-circle': circle,
          'custom-switch': switch
        }"
        *ngFor="let option of options; let i = index"
      >
        <input
          #checkbox
          type="checkbox"
          class="custom-control-input"
          [ngClass]="{ 'is-invalid': error }"
          id="{{ id }}-{{ i }}-bs"
          [value]="option.value"
          [attr.checked]="option.checked"
          [attr.disabled]="option.disabled"
          (click)="click($event)"
          (change)="change($event)"
        />
        <label class="custom-control-label" for="{{ id }}-{{ i }}-bs">
          {{ option.viewValue }}
        </label>
        <ng-container *ngIf="i === options.length - 1 && display === undefined">
          <div *ngIf="error" class="invalid-feedback">{{ error }}</div>
        </ng-container>
      </div>
      <ng-container *ngIf="display === 'inline'">
        <div *ngIf="error" class="invalid-feedback">{{ error }}</div>
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
    `,
  ],
})
export class BsChecksComponent extends DataInputBase implements DoCheck {
  @Input() options: Array<any>;
  @Input() display: string;
  @Input() circle: boolean;
  @Input() switch: boolean;

  @ViewChildren('checkbox') checkboxes: QueryList<ElementRef>;

  ngDoCheck(): void {
    this.watchModel();
  }

  bindWatchModelEvents(): void {
    this.initCheckedOptions();
  }

  detectPropertiesChanges(propName: string): void {
    if (propName === 'disabled') this.enableOrDisableCheckboxes();
    if (propName === 'options') {
      this.refreshCheckboxes();
    }
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
    setTimeout(() => {
      if (this.checkboxes !== undefined) {
        this.checkboxes.forEach((checkboxElementRef) => {
          const checkbox = checkboxElementRef.nativeElement;
          checkbox.disabled = this.disabled;
        });
      }
    });
  }

  initCheckedOptions(restart: boolean = false): void {
    setTimeout(() => {
      this.checkboxes.forEach((checkboxElementRef) => {
        const checkbox = checkboxElementRef.nativeElement;
        const values = this.model.getValue(this.name);

        if (values) {
          values.forEach((value) => {
            // tslint:disable-next-line: triple-equals
            if (checkbox.value == value) {
              checkbox.checked = true;
            } else {
              if (restart) {
                checkbox.checked = false;
              }
            }
          });
        } else {
          checkbox.checked = false;
        }
      });

      restart = false;
    });
  }

  refreshCheckboxes(): void {
    if (this.checkboxes !== undefined) {
      const values = this.getCheckboxesValues();
      this.fillModel(values);
    }
  }

  refresh(): void {
    this.initCheckedOptions(true);
  }
}
