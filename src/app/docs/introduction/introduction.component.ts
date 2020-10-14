import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-introduction',
  template: `
    <app-docs-container [markers]="markers">
      <h3 #marker>Introduction to NG Forms</h3>

      <div class="pt-3">
        <p>
          NG Forms is an Angular Library designed to make easier form building
          and validations. But not only that, you can create complex data
          structures and convert them into UI data inputs easily.
        </p>

        <p>
          NG Forms makes a compilation of the most common used data input
          components as for example <code>bootstrap-datepicker</code>,
          <code>bootstrap-select</code>, <code>select2</code>,
          <code>etc...</code>
        </p>

        <p>
          All of these components are angularized and ready to use in an easy
          way.
        </p>

        <h5 #marker class="mt-4">Getting started</h5>

        <ul>
          <li>
            <a routerLink="/getting-started/setup">Setup</a>
          </li>
          <li>
            <a routerLink="/getting-started/main-concepts">Main concepts</a>
          </li>
          <li>
            <a routerLink="/getting-started/main-components">Main components</a>
          </li>
        </ul>
      </div>
    </app-docs-container>
  `,
})
export class IntroductionComponent implements AfterViewInit {
  @ViewChildren('marker') targets: QueryList<ElementRef>;
  public markers: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.markers = this.targets;
    });
  }
}
