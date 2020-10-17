import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item" *ngFor="let route of routes">
        <a
          class="nav-link"
          routerLinkActive="active"
          [routerLink]="'/' + moduleUrl + '/' + route.path"
          >{{ route.title }}
        </a>
      </li>
    </ul>
  `,
})
export class TabsComponent implements OnInit {
  @Input() routes = [
    { title: 'Overview', path: 'overview' },
    { title: 'Api', path: 'api' },
    { title: 'Examples', path: 'examples' },
  ];

  private url: string;
  private urlArray: Array<string>;
  public moduleUrl: string;

  constructor(private router: Router) {
    this.url = this.router.url;
    this.urlArray = this.url.split('/');

    if (this.urlArray.length >= 4) {
      this.urlArray.pop();
    }

    this.moduleUrl = this.urlArray.join('/');
  }

  ngOnInit(): void {}
}
