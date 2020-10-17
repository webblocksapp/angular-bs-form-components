import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <ul class="navbar-nav">
      <ng-container *ngFor="let menuItem of sidebarMenu; let i = index">
        <li
          class="nav-item dropdown pl-3"
          [ngClass]="{ 'border-top border-bottom': menuItem.division }"
          *ngIf="menuItem.division === undefined"
        >
          <a
            class="nav-link"
            (click)="expandChild(i)"
            [routerLink]="menuItem.path"
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
                role="button"
              >
                {{ menuItemChild.title }}
              </a>
            </li>
          </ul>
        </li>
        <li
          class="nav-item dropdown pt-2 pb-2 pl-3 bg-light text-secondary"
          *ngIf="menuItem.division === true"
        >
          {{ menuItem.title }}
        </li>
      </ng-container>
    </ul>
  `,
})
export class SidebarComponent {
  @HostBinding('class') class = 'sidebar border';

  public sidebarMenu: any = [
    {
      title: 'Introduction',
      path: '/docs',
    },
    {
      title: 'Setup',
      path: '/docs/setup',
    },
    {
      title: 'Main components',
      division: true,
    },
    {
      title: 'Data Groups',
      path: '/docs/data-groups',
    },
    {
      title: 'Bootstrap components',
      division: true,
    },
    {
      title: 'Input',
      collapsed: true,
    },
    {
      title: 'Select',
      collapsed: true,
    },
    {
      title: 'Select2',
      collapsed: true,
    },
    {
      title: 'Checks',
      collapsed: true,
    },
    {
      title: 'Radios',
      collapsed: true,
    },
    {
      title: 'File',
      collapsed: true,
    },
    {
      title: 'Datepicker',
      collapsed: true,
    },
  ];

  expandChild(index): void {
    this.sidebarMenu.forEach((menuItem, i) => {
      if (index !== i) {
        menuItem.collapsed = true;
      } else {
        menuItem.collapsed = !menuItem.collapsed;
      }
    });
  }
}
