import {
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  HostBinding,
  EventEmitter,
  Output,
} from '@angular/core';
import { Type, Size } from '../types';
import { BsBaseInterface } from '../interfaces';
import * as uuid from 'uuid';

export class BsBaseComponent implements OnInit, OnChanges, BsBaseInterface {
  @Input()
  @HostBinding('id')
  id: string;

  @Input() label: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() type: Type = 'text';
  @Input() help: string;
  @Input() startIcon: string;
  @Input() startIconHtml: string;
  @Input() endIcon: string;
  @Input() endIconHtml: string;
  @Input() size: Size = 'default';

  @Output() keyupEvent: EventEmitter<any> = new EventEmitter();

  public inputSize: string;

  ngOnInit() {
    this.alwaysSetConfigsOnInit();
    this.setConfigsOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      this.alwaysDetectChanges(propName);
      this.detectPropertiesChanges(propName);
    }
  }

  alwaysSetConfigsOnInit(): void {
    this.setComponentUniqueId();
    this.setComponentUniqueName();
    this.setComponentEmptyPlaceholder();
  }

  setConfigsOnInit(): void {}

  alwaysDetectChanges(propName: string): void {
    if (propName === 'size') this.getInputSize();
  }

  detectPropertiesChanges(propName: string): void {}

  setComponentUniqueId(): void {
    if (this.id === undefined) this.id = uuid.v4();
  }

  setComponentUniqueName(): void {
    if (this.name === undefined) this.name = this.id + '-bs';
  }

  setComponentEmptyPlaceholder(): void {
    if (this.placeholder === undefined) this.placeholder = '';
  }

  getInputSize(): void {
    switch (this.size) {
      case 'default':
        this.inputSize = '';
        break;
      case 'large':
        this.inputSize = 'input-group-lg';
        break;
      case 'small':
        this.inputSize = 'input-group-sm';
        break;
      default:
        this.inputSize = '';
        break;
    }
  }
}
