import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DataInputBase, parseValue } from '@webblocksapp/ng-data-groups';

@Component({
  selector: 'multi-select-input',
  templateUrl: './multi-select-input.component.html',
  styleUrls: ['./multi-select-input.component.css'],
})
export class MultiSelectInputComponent extends DataInputBase {
  @Input() options: { value: any; viewValue: any }[];
  @Input() size: number | 'auto';
  @ViewChild('select', { read: ElementRef }) select: ElementRef;

  detectPropertiesChanges(propName: string): void {
    if (propName === 'size') this.computeSize();
  }

  bindWatchModelEvents(): void {
    this.initSelectedOptions();
  }

  bindFocusoutEvents(event: any): any {
    const value = this.getSelectedOptions();
    this.fillModel(value);
    this.validateField();

    return event;
  }

  initSelectedOptions(): void {
    const options = this.select.nativeElement.querySelectorAll('option');
    options.forEach((option) => {
      if (this.value?.indexOf(parseValue(option.value)) >= 0) {
        option.selected = true;
      } else {
        option.selected = false;
      }
    });
  }

  getSelectedOptions(): Array<any> {
    const options =
      this.select.nativeElement.querySelectorAll('option:checked');
    return Array.from(options).map((el: any) => parseValue(el.value));
  }

  computeSize(): void {
    if (this.size === 'auto') {
      this.size = this.options.length;
    }
  }
}
