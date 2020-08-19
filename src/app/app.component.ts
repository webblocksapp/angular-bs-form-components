import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu-header></app-menu-header>
    <div class="page-content p-4">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
