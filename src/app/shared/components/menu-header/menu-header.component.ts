import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">NG Forms</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              routerLink="docs"
              role="button"
              data-toggle="dropdown"
            >
              Documentation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `
      :host > nav {
        width: 100%;
      }
    `,
  ],
})
export class MenuHeaderComponent {
  @HostBinding('class') class = 'row';
}
