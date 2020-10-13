import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
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
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Themes
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item"> Default Bootstrap theme </a>
          <a class="dropdown-item"> Smart Admin </a>
        </div>
      </li>
    </ul>
  `,
})
export class SidebarComponent implements OnInit {
  @HostBinding('class') class = 'sidebar border';

  ngOnInit(): void {}
}
