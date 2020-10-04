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
  selector: 'bs-radios',
  template: `
    <label class="form-label" *ngIf="label">{{ label }}</label>
    <div class="form-group">
      <div
        class="custom-control custom-radio"
        [ngClass]="{
          'custom-control-inline': display === 'inline',
          'is-invalid': error,
          'custom-radio-rounded': rounded,
          'custom-switch': switch
        }"
        *ngFor="let option of options; let i = index"
      >
        <input
          #radio
          type="radio"
          class="custom-control-input"
          [ngClass]="{ 'is-invalid': error }"
          id="{{ id }}-{{ i }}-bs"
          name="{{ name }}-{{ id }}-bs[]"
          [attr.value]="option.value"
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
      .custom-radio {
        margin-bottom: 10px;
      }
    `,
  ],
})
export class BsRadiosComponent extends DataInputBase implements DoCheck {
  @Input() options: Array<any>;
  @Input() display: string;
  @Input() rounded: boolean;
  @Input() switch: boolean;

  @ViewChildren('radio') radios: QueryList<ElementRef>;

  ngDoCheck(): void {
    this.watchModel();
  }

  bindWatchModelEvents(): void {
    this.initCheckedOption();
  }

  detectPropertiesChanges(propName: string): void {
    if (propName === 'disabled') this.enableOrDisableRadios();
    if (propName === 'options') {
      this.refreshRadios();
    }
  }

  bindClickEvents(event: any): any {
    this.refreshRadios();
    this.validateField();
    return event;
  }

  getRadiosValue(): Array<any> {
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
    setTimeout(() => {
      if (this.radios !== undefined) {
        this.radios.forEach((radioElementRef) => {
          const radio = radioElementRef.nativeElement;
          radio.disabled = this.disabled;
        });
      }
    });
  }

  initCheckedOption(): void {
    setTimeout(() => {
      this.radios.forEach((radioElementRef) => {
        const radio = radioElementRef.nativeElement;
        const value = this.model.getValue(this.name);

        if (value !== undefined) {
          // tslint:disable-next-line: triple-equals
          if (radio.value == value) {
            radio.checked = true;
          }
        }
      });
    });
  }

  refreshRadios(): void {
    if (this.radios !== undefined) {
      const value = this.getRadiosValue();
      this.fillModel(value);
    }
  }
}
