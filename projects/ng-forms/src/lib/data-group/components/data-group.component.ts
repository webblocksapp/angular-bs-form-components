import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'data-group',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class DataGroupComponent implements OnInit, AfterContentInit {
  @HostBinding()
  class: string;

  @ContentChildren('dataInput', { descendants: true })
  dataInputs: QueryList<any>;
  public dataInputComponents: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.loadDataInputComponents();
  }

  loadDataInputComponents(): void {
    this.dataInputs.forEach((dataInput) => {
      this.dataInputComponents.push(dataInput);
    });
  }

  getDataInputComponents(): Array<any> {
    return this.dataInputComponents;
  }
}
