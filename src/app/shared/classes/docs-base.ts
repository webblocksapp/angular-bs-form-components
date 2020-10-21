import {
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Directive,
} from '@angular/core';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export class DocsBase implements AfterViewInit {
  @ViewChildren('marker') targets: QueryList<ElementRef>;

  public markers: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.markers = this.targets;
    });
  }
}
