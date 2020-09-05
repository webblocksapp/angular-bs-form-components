import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'data-footer',
  template: `
    <div [class]="class">
      <ng-content></ng-content>
    </div>
  `,
})
export class DataFooterComponent implements OnInit {
  @Input() class: string;
  @ContentChildren('submit') submitButtons: QueryList<ElementRef>;
  public submitButtonsNativeElements: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

  getSubmitButtonsNativeElements(): Array<any> {
    this.submitButtons.forEach((submitButton) => {
      this.submitButtonsNativeElements.push(submitButton.nativeElement);
    });

    return this.submitButtonsNativeElements;
  }
}
