import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dto',
  template: `<ng-content></ng-content>`,
})
export class DtoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
