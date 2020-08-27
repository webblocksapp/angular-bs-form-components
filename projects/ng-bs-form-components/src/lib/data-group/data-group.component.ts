import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { BsInputComponent } from '../bs-input/bs-input.component';

@Component({
  selector: 'data-group',
  template: ` <ng-content></ng-content> `,
})
export class DataGroupComponent implements OnInit, AfterContentInit {
  @ContentChildren(BsInputComponent) bsInputs: QueryList<BsInputComponent>;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.bsInputs.forEach((bsInput) => console.log(bsInput));
  }
}
