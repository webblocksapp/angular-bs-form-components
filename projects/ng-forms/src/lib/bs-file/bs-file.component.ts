import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
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
          [attr.multiple]="multiple"
          class="custom-file-input"
          [ngClass]="{ 'is-invalid': error }"
          id="{{ id }}-bs"
          (change)="change($event)"
          (focus)="focus($event)"
        />
        <label #customFileLabel class="custom-file-label" for="{{ id }}-bs">
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

      :host .custom-file-label {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
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
  @ViewChild('customFileLabel', { read: ElementRef })
  customFileLabel: ElementRef;

  @Input() multiple: boolean;

  public endSlotHtml = '<i class="fa fa-upload" aria-hidden="true"></i>';
  private clicked = false;

  bindChangeEvents(event: any): any {
    const value = this.getFileOrFiles();

    this.fillModel(value);
    this.validateField();

    setTimeout(() => {
      if (value === undefined) {
        this.customFileLabel.nativeElement.innerText = this.placeholder;
      }
    });

    return event;
  }

  bindFocusEvents(event: any): any {
    const value = this.getFileOrFiles();

    if (this.clicked === true && value === undefined) {
      this.validateField();
      this.clicked = false;
    }

    return event;
  }

  clickFileInput(): void {
    this.clicked = true;
    this.fileInput.nativeElement.click();
  }

  getFileOrFiles(): any {
    const files = this.fileInput.nativeElement.files;
    return this.multiple === true ? files : files[0];
  }

  @HostListener('click')
  onClickHost() {
    this.clicked = true;
  }
}
