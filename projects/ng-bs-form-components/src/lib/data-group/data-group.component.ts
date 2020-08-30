import {
  Component,
  OnInit,
  ContentChild,
  Input,
  AfterContentInit,
} from '@angular/core';
import { DataBodyComponent } from './components/data-body.component';
import { DataFooterComponent } from './components/data-footer.component';
import { BaseModel } from '@webblocksapp/class-validator';

@Component({
  selector: 'data-group',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class DataGroupComponent implements OnInit, AfterContentInit {
  @Input()
  class: string;
  @Input() model: BaseModel;

  @ContentChild(DataBodyComponent) dataBodyComponent: DataBodyComponent;
  @ContentChild(DataFooterComponent) dataFooterComponent: DataFooterComponent;
  public inputDataComponents: any = [];
  private submitDataButton: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.initInputDataComponents();
    this.initSubmitDataButton();
  }

  initInputDataComponents(): void {
    this.inputDataComponents = this.dataBodyComponent.getInputDataComponents();
    this.inputDataComponents.forEach((inputDataComponent) => {
      inputDataComponent.model = this.model;
    });
  }

  initSubmitDataButton(): void {
    this.submitDataButton = this.dataFooterComponent.getSubmitButtonNativeElement();
    this.submitDataButton.addEventListener('click', () => {
      this.submitData();
    });
  }

  submitData(): void {
    //TODO: pending to refactor using validate all.
    this.inputDataComponents.forEach((inputDataComponent) => {
      inputDataComponent.validateField();
    });
  }
}
