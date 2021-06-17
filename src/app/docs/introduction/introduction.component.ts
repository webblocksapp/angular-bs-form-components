import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-introduction',
  template: `
    <app-docs-container [markers]="markers">
      <h3 marker>Introduction to NG Data Groups</h3>

      <div class="pt-3">
        <p>
          NG Data Groups is an Angular Library designed to make easier form
          building and validations. But not only that, you can create complex
          data structures and convert them into UI data inputs easily.
        </p>

        <h5 marker class="mt-4">Advantages of using NG Data Groups</h5>
        <ul>
          <li>
            It provides an small framework powered with a modified version of
            <code>typestack/class-validator</code> to validate complex data
            models from UI data form input components easily.
          </li>
          <li>
            You can use it's core functionalities when building your custom
            components to manage data.
          </li>
        </ul>

        <h5 marker class="mt-4">Getting started</h5>

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
export class IntroductionComponent extends DocsBase {}
