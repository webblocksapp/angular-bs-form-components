import { ElementRef, QueryList } from '@angular/core';

export class DocsBaseRouter {
  public markers: QueryList<ElementRef>;

  onActivate(event: any): void {
    this.markers = event.markers;
  }
}
