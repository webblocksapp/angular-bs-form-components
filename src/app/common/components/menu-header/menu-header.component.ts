import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NgSmartAdminService } from '../../services/ng-smart-admin.service';

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
              <a class="dropdown-item" (click)="setTheme('default')">
                Default Bootstrap theme
              </a>
              <a class="dropdown-item" (click)="setTheme('smartAdmin')">
                Smart Admin
              </a>
            </div>
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
  providers: [ThemeService],
})
export class MenuHeaderComponent implements OnInit {
  @HostBinding('class') class = 'row';

  constructor(
    private readonly themeService: ThemeService,
    private readonly ngSmartAdminService: NgSmartAdminService,
  ) {}

  ngOnInit(): void {
    const { theme } = localStorage;
    this.setTheme(theme);
  }

  setTheme(theme = 'default'): void {
    localStorage.setItem('theme', theme);
    this.themeService.setTheme(theme);

    if (theme === 'smartAdmin') {
      this.ngSmartAdminService.refreshDom();
    }
  }
}
