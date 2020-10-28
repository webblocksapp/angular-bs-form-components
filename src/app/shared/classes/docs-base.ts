import {
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Directive,
  OnDestroy,
} from '@angular/core';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export class DocsBase implements AfterViewInit, OnDestroy {
  @ViewChildren('marker') targets: QueryList<ElementRef>;

  public markers: any = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.markers = this.targets;
    });
  }

  ngOnDestroy(): void {
    this.markers = null;
  }
}
