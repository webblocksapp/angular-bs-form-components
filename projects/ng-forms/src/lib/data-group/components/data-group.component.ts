import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'data-group',
  template: `<ng-content></ng-content>`,
})
export class DataGroupComponent implements OnInit, AfterContentInit {
  @HostBinding('class')
  @Input()
  class = 'd-block';

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
