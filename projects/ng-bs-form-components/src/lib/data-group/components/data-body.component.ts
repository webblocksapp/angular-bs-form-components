import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Input,
} from '@angular/core';
import { BsInputComponent } from '../../bs-input/bs-input.component';

@Component({
  selector: 'data-body',
  template: `
    <div [class]="class">
      <ng-content></ng-content>
    </div>
  `,
})
export class DataBodyComponent implements OnInit, AfterContentInit {
  @Input()
  class: string;

  @ContentChildren(BsInputComponent) bsInputs: QueryList<BsInputComponent>;
  public inputDataComponents: any = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.loadInputDataComponents();
  }

  loadInputDataComponents(): void {
    this.bsInputs.forEach((bsInput) => {
      this.inputDataComponents.push(bsInput);
    });
  }

  getInputDataComponents(): Array<any> {
    return this.inputDataComponents;
  }
}
