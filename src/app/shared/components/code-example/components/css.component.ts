import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `<ng-content></ng-content>`,
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
