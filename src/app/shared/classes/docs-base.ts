import {
  AfterViewInit,
  QueryList,
  ViewChildren,
  Directive,
  OnDestroy,
} from '@angular/core';
import { MarkerDirective } from '@shared/directives/marker.directive';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export class DocsBase implements AfterViewInit, OnDestroy {
  @ViewChildren(MarkerDirective) targets: QueryList<MarkerDirective>;

  public Object = Object;
  public JSON = JSON;
  public markers: any = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.markers = this.targets.toArray();
    });
  }

  ngOnDestroy(): void {
    this.markers = null;
  }
}
