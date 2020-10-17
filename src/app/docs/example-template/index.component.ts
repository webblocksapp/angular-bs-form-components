import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-groups',
  template: `
    <app-tabs></app-tabs>
    <router-outlet></router-outlet>
  `,
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
