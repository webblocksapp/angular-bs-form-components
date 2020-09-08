import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu-header></app-menu-header>
    <div class="page-content p-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .page-content {
        min-height: calc(100vh - 56px);
      }
    `,
  ],
})
export class AppComponent {}
