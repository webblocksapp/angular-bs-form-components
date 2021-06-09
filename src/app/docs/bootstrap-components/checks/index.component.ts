import { Component, Input } from '@angular/core';
import { DocsBaseRouter } from '@shared/classes';

@Component({
  selector: 'app-data-groups',
  template: `
    <app-docs-container [markers]="markers">
      <h5 class="mb-4">Bootstrap Checks</h5>
      <app-tabs></app-tabs>
      <div class="pt-3">
        <router-outlet (activate)="onActivate($event)"></router-outlet>
      </div>
    </app-docs-container>
  `,
})
export class IndexComponent extends DocsBaseRouter {}
