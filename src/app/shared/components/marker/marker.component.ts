import { Component } from '@angular/core';

@Component({
  selector: 'marker',
  template: ` <h5><ng-content></ng-content></h5> `,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class MarkerComponent {}
