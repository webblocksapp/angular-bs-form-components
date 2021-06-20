import { AfterViewInit, Directive, OnDestroy } from '@angular/core';

@Directive()
// tslint:disable-next-line: directive-class-suffix
export class DocsBase implements AfterViewInit, OnDestroy {
  public Object = Object;
  public JSON = JSON;
  public markers: any = [];

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.markers = document.querySelectorAll('marker');
    });
  }

  ngOnDestroy(): void {
    this.markers = null;
  }
}
