import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';
import { DataInputBase } from '../common/classes/data-input-base';

@Component({
  selector: 'bs-file',
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

      <div class="custom-file">
        <input
          #fileInput
          [attr.name]="name"
          type="file"
          [attr.disabled]="disabled"
          class="custom-file-input"
          [ngClass]="{ 'is-invalid': error }"
          id="{{ id }}-bs"
          (change)="change($event)"
        />
        <label
          class="custom-file-label"
          [style]="'--endSlot: ' + endSlot"
          for="{{ id }}-bs"
        >
          {{ placeholder }}
        </label>
      </div>

      <div
        *ngIf="endSlot"
        class="input-group-append upload-btn"
        (click)="clickFileInput()"
      >
        <span class="input-group-text">{{ endSlot }}</span>
      </div>
      <div
        *ngIf="endSlotHtml && endSlot === undefined"
        class="input-group-append"
        (click)="clickFileInput()"
      >
        <span
          class="input-group-text upload-btn"
          [innerHTML]="endSlotHtml"
        ></span>
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

      :host .custom-file-label::after {
        content: none !important;
      }

      :host .upload-btn {
        cursor: pointer;
      }
    `,
  ],
})
export class BsFileComponent extends DataInputBase {
  @HostBinding('class') class = 'form-group';

  @ViewChild('fileInput', { read: ElementRef }) fileInput: ElementRef;

  public endSlotHtml = '<i class="fa fa-upload" aria-hidden="true"></i>';

  bindFocusoutEvents(event: any): any {
    this.validateField();
    return event;
  }

  bindKeyupEvents(event: any): any {
    const value = event.target.value;

    this.fillModel(value);
    return event;
  }

  clickFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  @HostListener('mouseenter')
  onMouseoverHost() {
    this.fileInput.nativeElement.focus();
  }

  @HostListener('mouseleave')
  onMouseoutHost() {
    this.fileInput.nativeElement.blur();
  }
}
