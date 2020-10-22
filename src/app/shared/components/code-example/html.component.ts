import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  template: `<ng-content></ng-content>`,
})
export class HtmlComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
