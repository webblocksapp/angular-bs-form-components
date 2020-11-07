import { Component } from '@angular/core';
import { DocsBaseRouter } from '@shared/classes';

@Component({
  selector: 'app-data-groups',
  template: `
    <app-docs-container [markers]="markers">
      <h5 class="mb-4">Data Groups</h5>
      <app-tabs [routes]="routes"></app-tabs>
      <div class="pt-3">
        <router-outlet (activate)="onActivate($event)"></router-outlet>
      </div>
    </app-docs-container>
  `,
})
export class IndexComponent extends DocsBaseRouter {
  public routes = [{ title: 'Overview', path: 'overview' }];
}
