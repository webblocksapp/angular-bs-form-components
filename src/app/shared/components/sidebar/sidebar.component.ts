import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul class="navbar-nav">
      <ng-container *ngFor="let menuItem of sidebarMenu; let i = index">
        <li class="nav-item dropdown pl-3">
          <a
            class="nav-link"
            [routerLink]="menuItem.path"
            [routerLinkActive]="!menuItem.children ? 'active-link' : ''"
            [ngClass]="{
              'bg-light text-secondary no-hover': menuItem.children
            }"
            role="button"
          >
            {{ menuItem.title }}
            <span class="ml-2" *ngIf="menuItem.children !== undefined">
              <i class="fa"></i>
            </span>
          </a>
          <ul class="navbar-nav">
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

      .no-hover:hover {
        background-color: #f8f9fa !important;
        color: #6c757d !important;
        cursor: default;
      }
    `,
  ],
})
export class SidebarComponent {
  @HostBinding('class') class = 'sidebar border';

  public sidebarMenu: any = [
    {
      title: 'Quick start',
      path: '/docs/quick-start',
    },
    {
      title: 'Fundamentals',
      children: [
        {
          title: 'Data Input Base',
          path: '/docs/data-input-base',
        },
        {
          title: 'Base Model',
          path: '/docs/base-model',
        },
        {
          title: 'Data Groups',
          path: '/docs/data-groups',
        },
      ],
    },
    {
      title: 'Bootstrap components',
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
}
