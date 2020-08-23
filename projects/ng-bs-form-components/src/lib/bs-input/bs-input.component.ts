import { Component, HostBinding, Input } from '@angular/core';
import { BsBaseComponent } from '../common/components/bs-base.component';

@Component({
  selector: 'bs-input',
  template: `
    <label class="form-label" *ngIf="label" attr.for="{{ id }}-bs">{{
      label
    }}</label>
    <div class="input-group {{ inputSize }}">
      <div *ngIf="startIcon" class="input-group-prepend">
        <span class="input-group-text">{{ startIcon }}</span>
      </div>
      <div *ngIf="startIconHtml" class="input-group-prepend">
        <span class="input-group-text" [innerHTML]="startIconHtml"></span>
      </div>
      <input
        [name]="name"
        [type]="type"
        [placeholder]="placeholder"
        class="form-control"
        id="{{ id }}-bs"
        (keyup)="setKeyupEvents($event)"
      />
      <div *ngIf="endIcon" class="input-group-append">
        <span class="input-group-text">{{ endIcon }}</span>
      </div>
      <div *ngIf="endIconHtml" class="input-group-append">
        <span class="input-group-text">{{ endIconHtml }}</span>
      </div>
    </div>
    <small *ngIf="help" class="form-text text-muted">
      {{ help }}
    </small>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class BsInputComponent extends BsBaseComponent {
  @HostBinding('class') class = 'form-group';

  setConfigsOnInit() {}
  bindKeyupEvents() {}
}
