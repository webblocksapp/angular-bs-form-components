import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <div #markersWrapper class="pl-3 position-absolute" *ngIf="markers.length">
      <div class="markers-container">
        <ul class="navbar-nav">
          <li
            class="nav-item dropdown"
            *ngFor="let marker of markers"
            (click)="scrollToMarker(marker)"
          >
            {{ marker.innerText }}
          </li>
        </ul>
      </div>
      <div class="mt-3 d-flex justify-content-center">
        <google-ad></google-ad>
      </div>
    </div>
  `,
  styles: [
    `
      .markers-container {
        border-left: 3px solid gray;
        padding-left: 17px;
      }

      .markers-container li {
        cursor: pointer;
        margin-bottom: 10px;
        font-size: 14px;
      }

      .markers-container li:hover {
        color: #737373;
      }

      .active {
        color: #737373;
      }
    `,
  ],
})
export class OverviewComponent implements AfterViewInit {
  @ViewChild('markersWrapper', { read: ElementRef }) markersWrapper: ElementRef;
  @Input() markers: Array<any>;

  ngAfterViewInit(): void {
    this.updatePosition();

    window.addEventListener('scroll', () => {
      this.updatePosition();
    });

    window.addEventListener('resize', () => {
      this.updatePosition();
    });
  }

  scrollToMarker(element): void {
    const offsetTop = element.offsetTop;
    window.scrollTo(0, offsetTop);
  }

  updatePosition(): void {
    const markersWrapper = this.markersWrapper.nativeElement;
    const parentElement = markersWrapper.parentElement;

    let scrollY = window.scrollY;
    let parentElementPositionY =
      window.scrollY + parentElement.getBoundingClientRect().top;

    if (scrollY > parentElementPositionY) {
      markersWrapper.style.top = scrollY - parentElementPositionY + 20 + 'px';
      return;
    }

    markersWrapper.style.top = 0;
  }
}
