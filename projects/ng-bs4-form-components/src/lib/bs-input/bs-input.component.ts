import { Component, HostBinding } from '@angular/core';
import { DataInputBase, parseValue } from '@webblocksapp/ng-data-groups';

@Component({
  selector: 'bs-input',
  template: `
    <label class="form-label" *ngIf="label" attr.for="{{ id }}-bs">{{
      label
    }}</label>
    <div
      class="input-group {{ inputSize }}"
      [ngClass]="{
        'is-invalid': error && !disabled,
        'is-valid': touched && highlightOnValid && !error && !disabled
      }"
    >
      <div *ngIf="startSlot" class="input-group-prepend">
        <span class="input-group-text">{{ startSlot }}</span>
      </div>
      <div *ngIf="startSlotHtml" class="input-group-prepend">
        <span class="input-group-text" [innerHTML]="startSlotHtml"></span>
      </div>
      <input
        [attr.autocomplete]="autocomplete ? 'on' : 'off'"
        [attr.name]="name"
        [value]="value || null"
        [type]="type"
        [attr.placeholder]="placeholder"
        [attr.disabled]="disabled"
        class="form-control"
        [ngClass]="{
          'is-invalid': error && !disabled,
          'is-valid': touched && highlightOnValid && !error && !disabled
        }"
        id="{{ id }}-bs"
        (focusout)="focusout($event)"
        (focus)="focus($event)"
        (change)="change($event)"
        (input)="input($event)"
        (keyup)="keyup($event)"
        (keydown)="keydown($event)"
        (keypress)="keypress($event)"
        (click)="click($event)"
        (dblclick)="dblclick($event)"
        (mousedown)="mousedown($event)"
        (mousemove)="mousemove($event)"
        (mouseout)="mouseout($event)"
        (mouseover)="mouseover($event)"
        (mouseup)="mouseup($event)"
        (wheel)="wheel($event)"
      />

      <div *ngIf="endSlot" class="input-group-append">
        <span class="input-group-text">{{ endSlot }}</span>
      </div>
      <div *ngIf="endSlotHtml" class="input-group-append">
        <span class="input-group-text" [innerHTML]="endSlotHtml"></span>
      </div>
    </div>
    <small *ngIf="help" class="form-text text-muted">
      {{ help }}
    </small>
    <div *ngIf="error" class="invalid-feedback">{{ error }}</div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class BsInputComponent extends DataInputBase {
  @HostBinding('class') class = 'form-group';

  bindFocusoutEvents(event: any): any {
    this.validateField();
    return event;
  }

  bindInputEvents(event: any): any {
    const value = parseValue(event.target.value);

    this.fillModel(value);
    return event;
  }
}
