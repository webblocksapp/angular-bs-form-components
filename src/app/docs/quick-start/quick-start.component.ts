import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-introduction',
  template: `
    <app-docs-container [markers]="markers">
      <h3 marker>Quick Start</h3>

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

        <h3 marker>Setup</h3>

        <div class="pt-3">
          <ol>
            <li>
              Run the following npm command:
              <code>npm i @webblocksapp/ng-data-groups</code>
            </li>

            <h5 marker class="mt-3"><b>Dependencies</b></h5>
            <p>
              Once installed <b>NG Data Groups</b> into your project, the
              following dependencies will be added automatically:
            </p>

            <ul class="mb-3">
              <li *ngFor="let package of Object.keys(dependencies)">
                <code>"{{ package }}": "{{ dependencies[package] }}"</code>
              </li>
            </ul>
          </ol>

          <h5 marker class="mt-3"><b>Module's registration</b></h5>

          <ol start="2">
            <li>
              Register on your <code>app.module.ts</code> the following
              <code>NgDataGroupsModule</code>.
            </li>

            <pre><code class="mt-3 mb-3" [highlight]='code1'></code></pre>
          </ol>

          <ul>
            <li>
              <b>Optional:</b> you can also install the
              <a routerLink="/docs/bootstrap/setup">
                NG Data Groups Bootstrap Components
              </a>
              which provides a compilation of most used Bootstrap components
              bound with the <b>NG Data Groups Framework</b>. Once installed,
              register the <code>NgBs4FormComponentsModule</code> as follows:
            </li>

            <pre><code class="mt-3 mb-3" [highlight]='code2'></code></pre>
          </ul>
        </div>

        <h5 marker class="mt-4">Getting started</h5>

        <p>
          To get involved quickly with the NG Data Groups framework, check the
          following:
        </p>

        <ul>
          <li>
            <a routerLink="/docs/data-groups">Quick overview</a>
          </li>
          <li>
            <a routerLink="/docs/bootstrap/setup">
              Bootstrap 4.x form components
            </a>
          </li>
        </ul>
      </div>
    </app-docs-container>
  `,
})
export class QuickStartComponent extends DocsBase {
  public dependencies = {
    '@types/lodash': '^4.14.168',
    '@types/validator': '^13.1.3',
    '@webblocksapp/class-validator': '0.13.1',
    lodash: '^4.17.21',
    uuid: '^8.3.0',
  };

  public code1 = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';
  ...
  import { NgDataGroupsModule } from '@webblocksapp/ng-data-groups';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      ...
      NgDataGroupsModule
      ...
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  `;

  public code2 = `
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';
  ...
  import { NgDataGroupsModule } from '@webblocksapp/ng-data-groups';
  import { NgBs4FormComponentsModule } from '@webblocksapp/ng-bs4-form-components';

  @NgModule({
    declarations: [AppComponent],
    imports: [
      ...
      NgDataGroupsModule,
      NgBs4FormComponentsModule
      ...
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
  `;
}
