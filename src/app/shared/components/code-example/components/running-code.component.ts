import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-running-code',
  template: `<ng-content></ng-content>`,
})
export class RunningCodeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
