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
  public inputDataComponents: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.loadInputDataComponents();
  }

  loadInputDataComponents(): void {
    this.dataInputs.forEach((dataInput) => {
      this.inputDataComponents.push(dataInput);
    });
  }

  getInputDataComponents(): Array<any> {
    return this.inputDataComponents;
  }
}
