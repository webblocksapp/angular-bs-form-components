import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts',
  template: `<ng-content></ng-content>`,
})
export class TsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
