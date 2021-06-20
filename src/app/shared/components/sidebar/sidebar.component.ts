import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul class="navbar-nav">
      <ng-container *ngFor="let menuItem of sidebarMenu; let i = index">
        <li class="nav-item dropdown pl-3">
          <a
            class="nav-link"
            (click)="expandChild(i)"
            [routerLink]="menuItem.path"
            [routerLinkActive]="!menuItem.children ? 'active-link' : ''"
            [ngClass]="{ 'bg-light text-secondary': menuItem.children }"
            role="button"
          >
            {{ menuItem.title }}
            <span class="ml-2" *ngIf="menuItem.children !== undefined">
              <i
                class="fa"
                [ngClass]="{
                  'fa-caret-down': menuItem.collapsed === true,
                  'fa-caret-up': menuItem.collapsed === false
                }"
              ></i>
            </span>
          </a>
          <ul
            class="navbar-nav"
            *ngIf="
              menuItem.children !== undefined && menuItem.collapsed === false
            "
          >
            <li
              class="nav-item dropdown pl-3"
              *ngFor="let menuItemChild of menuItem.children"
            >
              <a
                class="nav-link"
                [routerLink]="menuItemChild.path"
                routerLinkActive="active-link"
                role="button"
              >
                {{ menuItemChild.title }}
              </a>
            </li>
          </ul>
        </li>
      </ng-container>
    </ul>
  `,
  styles: [
    `
      a.active-link {
        font-weight: bolder;
      }

      :host .nav-item {
        padding-left: 0px !important;
      }

      :host .nav-link {
        padding-left: 17px;
      }

      :host .nav-item .navbar-nav {
        padding-left: 17px;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  @HostBinding('class') class = 'sidebar border';

  public sidebarMenu: any = [
    {
      title: 'Quick start',
      path: '/docs/quick-start',
    },
    {
      title: 'Main components',
      collapsed: true,
      children: [
        {
          title: 'Data Groups',
          path: '/docs/data-groups',
        },
        {
          title: 'Data Input Base',
          path: '/docs/data-input-base',
        },
      ],
    },
    {
      title: 'Bootstrap components',
      collapsed: true,
      children: [
        {
          title: 'Setup',
          path: '/docs/bootstrap/setup',
        },
        {
          title: 'Input',
          path: '/docs/bootstrap/input',
        },
        {
          title: 'Select',
          path: '/docs/bootstrap/select',
        },
        {
          title: 'Select2',
          path: '/docs/bootstrap/select2',
        },
        {
          title: 'Checks',
          path: '/docs/bootstrap/checks',
        },
        {
          title: 'Radios',
          path: '/docs/bootstrap/radios',
        },
        {
          title: 'Datepicker',
          path: '/docs/bootstrap/datepicker',
        },
      ],
    },
  ];

  ngOnInit(): void {
    const menuItemIndex = +localStorage.getItem('menuItemIndex') || 0;
    this.expandChild(menuItemIndex);
  }

  expandChild(index): void {
    localStorage.setItem('menuItemIndex', index);
    this.sidebarMenu.forEach((menuItem, i) => {
      if (index !== i) {
        menuItem.collapsed = true;
      } else {
        menuItem.collapsed = !menuItem.collapsed;
      }
    });
  }
}
