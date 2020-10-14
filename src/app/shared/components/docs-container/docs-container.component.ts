import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-container',
  template: `
    <div class="row">
      <div
        [ngClass]="{
          'col-9': markers !== undefined,
          'col-12': markers === undefined
        }"
      >
        <ng-content></ng-content>
      </div>
      <div *ngIf="markers !== undefined" class="col-3">
        <app-overview [markers]="markers"></app-overview>
      </div>
    </div>
  `,
})
export class DocsContainerComponent implements OnInit {
  @Input() markers: Array<ElementRef>;

  ngOnInit(): void {}
}
