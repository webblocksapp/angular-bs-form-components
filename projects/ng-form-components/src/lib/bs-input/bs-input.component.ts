import { Component, HostBinding } from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';

@Component({
  selector: 'bs-input',
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
      <input
        [attr.name]="name"
        [attr.value]="value"
        [type]="type"
        [attr.placeholder]="placeholder"
        class="form-control"
        [ngClass]="{ 'is-invalid': error }"
        id="{{ id }}-bs"
        (focusout)="focusout($event)"
        (blur)="blur($event)"
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
        <span class="input-group-text">{{ endSlotHtml }}</span>
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

  setConfigsOnInit() {}

  bindFocusoutEvents(event: any): any {
    this.validateFieldOnFocusOut();
    return event;
  }

  bindKeyupEvents(event: any): any {
    this.fillModel(event);
    return event;
  }
}
