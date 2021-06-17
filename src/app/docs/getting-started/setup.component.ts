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
            <code>npm i @webblocksapp/ng-data-groups</code>
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
        </ol>
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
    uuid: '^8.3.0',
  };
}
