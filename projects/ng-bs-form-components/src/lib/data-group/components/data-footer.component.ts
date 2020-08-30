import {
  Component,
  OnInit,
  Input,
  ContentChild,
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
  @ContentChild('submit') submitButton: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  getSubmitButtonNativeElement(): any {
    return this.submitButton.nativeElement;
  }
}
