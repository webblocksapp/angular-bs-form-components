import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-container',
  template: `
    <div class="row">
      <div
        [ngClass]="{
          'col-9': markers.length,
          'col-12': !markers.length
        }"
      >
        <ng-content></ng-content>
      </div>
      <div *ngIf="markers.length" class="col-3">
        <app-overview [markers]="markers"></app-overview>
      </div>
    </div>
  `,
})
export class DocsContainerComponent {
  @Input() markers: Array<ElementRef> = [];
}
