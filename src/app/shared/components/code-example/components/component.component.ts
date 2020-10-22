import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `<ng-content></ng-content>`,
})
export class ComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
