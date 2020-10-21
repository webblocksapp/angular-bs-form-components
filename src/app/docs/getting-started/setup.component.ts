import { Component } from '@angular/core';
import { DocsBase } from '@shared/classes';

@Component({
  selector: 'app-introduction',
  template: `
    <app-docs-container [markers]="markers">
      <h3 #marker>Setup</h3>

      <div class="pt-3">
        <ol>
          <li>
            Run the following npm command:
            <code>npm i @webblocksapp/ng-forms</code>
          </li>

          <h5 #marker class="mt-3"><b>Dependencies</b></h5>
          <p>
            Once installed <b>NG Forms</b> into your project, the following
            dependencies will be added automatically:
          </p>

          <ul class="mb-5">
            <li><code>"@fortawesome/fontawesome-free": "^5.1.0-9",</code></li>
            <li><code>"@webblocksapp/class-validator": "^0.12.2",</code></li>
            <li><code>"bootstrap": "^4.5.2",</code></li>
            <li><code>"bootstrap-datepicker": "^1.9.0"</code></li>
            <li><code>"bootstrap-select": "^1.13.18"</code></li>
            <li><code>"generic-type-guard": "^3.2.0",</code></li>
            <li><code>"jquery": "^3.5.1",</code></li>
            <li><code>"select2": "^4.0.13",</code></li>
            <li><code>"select2-bootstrap-theme": "0.1.0-beta.10",</code></li>
            <li><code>"uuid": "^8.3.0",</code></li>
          </ul>

          <li>
            Configure <code>jQuery</code> globally on
            <code>tsconfig.app.json</code> file:
          </li>

          <pre><code class="mt-3" [highlight]='tsconfigCode'></code></pre>

          <li>Register inside <code>angular.json</code>:</li>

          <pre><code class="mt-3" [highlight]='angularJsonCode'></code></pre>
        </ol>

        <h5 #marker class="mt-4">About jQuery</h5>

        <p>
          Most of Bootstrap components from NG Forms use Bootstrap 4.5 and
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
  public tsconfigCode = `  ...
    "compilerOptions": {
      "outDir": "./out-tsc/app",
      "types": ["jquery"]
    },
  ...`;
  public angularJsonCode = `  ...
    "styles": [
      ...
      "node_modules/@fortawesome/fontawesome-free/css/all.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
      "node_modules/bootstrap-select/dist/css/bootstrap-select.min.css",
      "node_modules/select2/dist/css/select2.min.css",
      "node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css"
      ...
    ],
    "scripts": [
      ...
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
      "node_modules/bootstrap-select/dist/js/bootstrap-select.min.js",
      "node_modules/select2/dist/js/select2.min.js",
      ...
    ]
  ...
  `;
}
