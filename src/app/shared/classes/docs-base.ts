import {
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

export class DocsBase implements AfterViewInit {
  @ViewChildren('marker') targets: QueryList<ElementRef>;

  public markers: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.markers = this.targets;
    });
  }
}
