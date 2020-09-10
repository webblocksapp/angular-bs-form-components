import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'data-group',
  template: `
    <div [class]="class">
      <ng-content></ng-content>
    </div>
  `,
})
export class DataGroupComponent implements OnInit, AfterContentInit {
  @Input()
  class: string;

  @ContentChildren('dataInput') dataInputs: QueryList<any>;
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
