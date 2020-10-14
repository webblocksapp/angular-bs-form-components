import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <div class="pl-3" *ngIf="markers !== undefined">
      <ul class="navbar-nav">
        <li
          class="nav-item dropdown"
          *ngFor="let marker of markers"
          (click)="scrollToMarker(marker.nativeElement)"
        >
          {{ marker.nativeElement.innerText }}
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      :host > div {
        border-left: 3px solid gray;
      }

      :host > div li {
        cursor: pointer;
        margin-bottom: 10px;
        font-size: 14px;
      }

      :host > div li:hover {
        color: #737373;
      }

      :host .active {
        color: #737373;
      }
    `,
  ],
})
export class OverviewComponent {
  @Input() markers: Array<ElementRef>;

  scrollToMarker(element): void {
    const offsetTop = element.offsetTop;
    window.scrollTo(0, offsetTop);
  }
}
