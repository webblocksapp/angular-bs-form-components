import {
  Component,
  OnInit,
  ContentChild,
  ContentChildren,
  QueryList,
  Input,
  AfterContentInit,
  ElementRef,
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
  @ContentChildren('dataInput') dataInputs: QueryList<any>;
  @ContentChildren('submit') submitButtons: QueryList<ElementRef>;
  public inputDataComponents: Array<any> = [];
  private submitDataButtons: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.initInputDataComponents();
    this.initSubmitDataButtons();
  }

  initInputDataComponents(): void {
    this.dataInputs.forEach((dataInput) => {
      this.inputDataComponents.push(dataInput);
    });

    if (this.dataBodyComponent !== undefined) {
      this.inputDataComponents = this.inputDataComponents.concat(
        this.dataBodyComponent.getInputDataComponents(),
      );
    }

    this.inputDataComponents.forEach((inputDataComponent) => {
      inputDataComponent.model = this.model;
    });
  }

  initSubmitDataButtons(): void {
    this.submitButtons.forEach((submitButton) => {
      this.submitDataButtons.push(submitButton.nativeElement);
    });

    if (this.dataFooterComponent !== undefined) {
      this.submitDataButtons = this.submitDataButtons.concat(
        this.dataFooterComponent.getSubmitButtonsNativeElements(),
      );
    }

    this.submitDataButtons.forEach((submitDataButton) => {
      submitDataButton.addEventListener('click', () => {
        this.submitData();
      });
    });
  }

  submitData(): void {
    this.inputDataComponents.forEach((inputDataComponent) => {
      inputDataComponent.validateField();
    });
  }
}
