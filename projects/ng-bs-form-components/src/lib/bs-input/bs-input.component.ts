import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bs-input',
  template: `
    <div class="form-group {{ classes }}">
      <label class="form-label" *ngIf="label" for="{{ name }}Id">{{
        label
      }}</label>
      <div class="input-group">
        <div *ngIf="startIcon" class="input-group-prepend">
          <span class="input-group-text">{{ startIcon }}</span>
        </div>
        <div *ngIf="startIconHtml" class="input-group-prepend">
          <span class="input-group-text" [innerHTML]="startIconHtml"></span>
        </div>
        <input
          [name]="name"
          [type]="type"
          class="form-control"
          id="{{ name }}Id"
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
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class BsInputComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() type = 'text';
  @Input() classes: string;
  @Input() help: string;
  @Input() startIcon: string;
  @Input() startIconHtml: string;
  @Input() endIcon: string;
  @Input() endIconHtml: string;

  constructor() {}

  ngOnInit(): void {}
}
