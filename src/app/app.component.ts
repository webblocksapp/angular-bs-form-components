import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid min-vh-100 d-flex flex-column">
      <app-menu-header></app-menu-header>
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
