import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-container',
  template: `
    <div class="row">
      <div class="col-9">
        <ng-content></ng-content>
      </div>
      <div class="col-3">
        <app-overview *ngIf="markers.length" [markers]="markers"></app-overview>
      </div>
    </div>
  `,
})
export class DocsContainerComponent {
  @Input() markers: Array<ElementRef> = [];
}
