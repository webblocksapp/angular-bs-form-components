import {
  Component,
  HostBinding,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';

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
        #select2
        style="width: 100%"
        [attr.name]="name"
        [attr.value]="value"
        [attr.placeholder]="placeholder"
        class="form-control select2"
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
      >
        <optgroup label="Alaskan/Hawaiian Time Zone">
          <option value="AK">Alaska</option>
          <option value="HI">Hawaii</option>
        </optgroup>
        <optgroup label="Pacific Time Zone">
          <option value="CA">California</option>
          <option value="NV">Nevada</option>
          <option value="OR">Oregon</option>
          <option value="WA">Washington</option>
        </optgroup>
        <optgroup label="Mountain Time Zone">
          <option value="AZ">Arizona</option>
          <option value="CO">Colorado</option>
          <option value="ID">Idaho</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NM">New Mexico</option>
          <option value="ND">North Dakota</option>
          <option value="UT">Utah</option>
          <option value="WY">Wyoming</option>
        </optgroup>
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
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class BsSelect2Component extends DataInputBase implements AfterViewInit {
  @HostBinding('class') class = 'form-group';
  @ViewChild('select2', { read: ElementRef }) select2: ElementRef;

  private jQueryEl: any;

  ngAfterViewInit(): void {
    this.initJQueryEl();
    this.initSelect2();
  }

  initJQueryEl(): void {
    this.jQueryEl = $(this.select2.nativeElement);
  }

  initSelect2(): void {
    this.jQueryEl.select2();
  }
}
