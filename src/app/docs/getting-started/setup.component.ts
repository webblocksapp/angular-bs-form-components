import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-introduction',
  template: `
    <app-docs-container [markers]="markers">
      <h3 marker>Setup</h3>

      <div class="pt-3">
        <ol>
          <li>
            Run the following npm command:
            <code>npm i @webblocksapp/ng-forms</code>
          </li>

          <h5 marker class="mt-3"><b>Dependencies</b></h5>
          <p>
            Once installed <b>NG Data Groups</b> into your project, the
            following dependencies will be added automatically:
          </p>

          <ul class="mb-5">
            <li *ngFor="let package of Object.keys(dependencies)">
              <code>"{{ package }}": "{{ dependencies[package] }}"</code>
            </li>
          </ul>

          <li>
            Configure <code>jQuery</code> globally on
            <code>tsconfig.app.json</code> file:
          </li>

          <pre><code class="mt-3 mb-3" [highlight]='tsconfigAppCode'></code></pre>

          <li>
            Also configure <code>jQuery</code> globally on
            <code>tsconfig.json</code> file:
          </li>

          <pre><code class="mt-3 mb-3" [highlight]='tsconfigCode'></code></pre>

          <li>Register inside <code>angular.json</code>:</li>

          <pre><code class="mt-3" [highlight]='angularJsonCode'></code></pre>
        </ol>

        <h5 marker class="mt-4">About jQuery</h5>

        <p>
          Most of Bootstrap components from NG Data Groups use Bootstrap 4.5 and
          jQuery, however it's not necessary to invoke jQuery methods to work
          with them.
        </p>
        <p>
          Each component has been angularized wrapping jQuery inside it's
          methods.
        </p>
      </div>
    </app-docs-container>
  `,
})
export class SetupComponent extends DocsBase {
  public dependencies = {
    '@types/lodash': '^4.14.168',
    '@types/validator': '^13.1.3',
    '@webblocksapp/class-validator': '0.13.1',
    lodash: '^4.17.21',
  };

  public tsconfigAppCode = `  ...
    "compilerOptions": {
      ...
      "outDir": "./out-tsc/app",
      "types": ["jquery"]
      ...
    },
  ...`;

  public tsconfigCode = `  ...
    "compilerOptions": {
      ...
      "types": ["node", "jquery"],
      ...
    },
  ...`;

  public angularJsonCode = `  ...
    "styles": [
      ...
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/@fortawesome/fontawesome-free/css/all.css",
      "node_modules/bootstrap-select/dist/css/bootstrap-select.min.css",
      "node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
      "node_modules/select2/dist/css/select2.min.css",
      "node_modules/@ttskch/select2-bootstrap4-theme/dist/select2-bootstrap4.min.css"
      ...
    ],
    "scripts": [
      ...
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/bootstrap-select/dist/js/bootstrap-select.min.js",
      "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
      "node_modules/select2/dist/js/select2.min.js"
      ...
    ]
  ...
  `;
}
