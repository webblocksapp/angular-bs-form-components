import { Directive, ElementRef } from '@angular/core';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[marker]' })
export class MarkerDirective {
  constructor(public elementRef: ElementRef) {}
}
