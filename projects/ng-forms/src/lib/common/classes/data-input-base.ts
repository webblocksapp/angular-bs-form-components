import {
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  HostBinding,
  KeyValueDiffers,
  KeyValueDiffer,
  Directive,
  NgZone,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

import {
  DataInputBaseInterface,
  FormEventsInterface,
  KeyboardEventsInterface,
  MouseEventsInterface,
} from '../interfaces';
import * as uuid from 'uuid';
import { BaseModel } from '../classes/base-model';
import { InputType, InputSize } from '../types';
import { capitalize, isNull } from '../utils';
import { ValidationError } from '@webblocksapp/class-validator';
import { Subscription } from 'rxjs';

// tslint:disable-next-line: no-conflicting-lifecycle
@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class DataInputBase
  implements
    OnInit,
    AfterViewInit,
    OnChanges,
    OnDestroy,
    DataInputBaseInterface,
    FormEventsInterface,
    KeyboardEventsInterface,
    MouseEventsInterface
{
  @Input()
  @HostBinding('id')
  id: string;

  @Input() label: string;
  @Input() name: string;
  @Input() type: InputType = 'text';
  @Input() size: InputSize = 'default';
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() help: string;
  @Input() startSlot: string;
  @Input() startSlotHtml: string;
  @Input() endSlot: string;
  @Input() endSlotHtml: string;
  @Input() autocomplete: boolean;
  @Input() value: any = null;
  @Input() model: BaseModel;
  @Input() highlightOnValid = false;

  @Output() focusEvent: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() focusoutEvent: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() blurEvent: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() changeEvent: EventEmitter<Event> = new EventEmitter();
  @Output() inputEvent: EventEmitter<Event> = new EventEmitter();

  @Output() keydownEvent: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() keypressEvent: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() keyupEvent: EventEmitter<KeyboardEvent> = new EventEmitter();

  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() dblclickEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() mousedownEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() mousemoveEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() mouseoutEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() mouseoverEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() mouseupEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() mousewheelEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() wheelEvent: EventEmitter<MouseEvent> = new EventEmitter();

  public inputSize: string;
  public error: string;
  public isReactiveForm: boolean = true;
  public touched: boolean = false;
  public usingDatagroup: boolean = false;
  private modelDiffer: KeyValueDiffer<string, any>;
  private modelMounted: boolean = false;
  private changes$: Subscription;

  constructor(private differs: KeyValueDiffers, public ngZone: NgZone) {}

  ngOnInit() {
    this.alwaysSetConfigsOnInit();
    this.setConfigsOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      this.alwaysDetectPropertiesChanges(propName);
      this.detectPropertiesChanges(propName);
    }
  }

  ngAfterViewInit(): void {
    this.alwaysSetConfigsAfterViewInit();
    this.setConfigsAfterViewInit();
  }

  // ----------------------------------------------------------------
  // ------- Component configs on init and changes detection  -------
  // ------------------ for computed attributes ---------------------
  // ----------------------------------------------------------------

  alwaysSetConfigsOnInit(): void {
    this.setComponentUniqueId();
  }

  setConfigsOnInit(): void {}

  alwaysSetConfigsAfterViewInit(): void {}

  setConfigsAfterViewInit(): void {}

  alwaysDetectPropertiesChanges(propName: string): void {
    if (propName === 'size') this.getInputSize();
    if (propName === 'disabled') this.computeDisabledProperty();
    if (propName === 'readonly') this.computeReadonlyProperty();
  }

  detectPropertiesChanges(propName: string): void {}

  setComponentUniqueId(): void {
    if (this.id === undefined) this.id = uuid.v4();
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

  computeDisabledProperty(): void {
    switch (this.disabled) {
      case true:
        this.disabled = true;
        break;
      case false:
        this.disabled = undefined;
        break;
      default:
        this.disabled = undefined;
        break;
    }
  }

  computeReadonlyProperty(): void {
    switch (this.readonly) {
      case true:
        this.readonly = true;
        break;
      case false:
        this.readonly = undefined;
        break;
      default:
        this.readonly = undefined;
        break;
    }
  }

  // --------------------------------------
  // ------- Component forms events -------
  // --------------------------------------

  focus(event: any): void {
    event = this.bindFocusEvents(event);
    this.focusEvent.emit(event);
  }

  bindFocusEvents(event: any): any {
    return event;
  }

  focusout(event: any): void {
    event = this.bindFocusoutEvents(event);
    this.focusoutEvent.emit(event);
  }

  bindFocusoutEvents(event: any): any {
    return event;
  }

  blur(event: any): void {
    event = this.bindBlurEvents(event);
    this.blurEvent.emit(event);
  }

  bindBlurEvents(event: any): any {
    return event;
  }

  change(event: any): void {
    event = this.bindChangeEvents(event);
    this.changeEvent.emit(event);
  }

  bindChangeEvents(event: any): any {
    return event;
  }

  input(event: any): void {
    event = this.bindInputEvents(event);
    this.inputEvent.emit(event);
  }

  bindInputEvents(event: any): any {
    return event;
  }

  // --------------------------------------
  // ----- Component keyboard events ------
  // --------------------------------------

  keyup(event: any): void {
    event = this.bindKeyupEvents(event);
    this.keyupEvent.emit(event);
  }

  bindKeyupEvents(event: any): any {
    return event;
  }

  keydown(event: any): void {
    event = this.bindKeydownEvents(event);
    this.keydownEvent.emit(event);
  }

  bindKeydownEvents(event: any): any {
    return event;
  }

  keypress(event: any): void {
    event = this.bindKeypressEvents(event);
    this.keypressEvent.emit(event);
  }

  bindKeypressEvents(event: any): any {
    return event;
  }

  // --------------------------------------
  // ----- Component mouse events ------
  // --------------------------------------

  click(event: any): void {
    event = this.bindClickEvents(event);
    this.clickEvent.emit(event);
  }

  bindClickEvents(event: any): any {
    return event;
  }

  dblclick(event: any): void {
    event = this.bindDblclickEvents(event);
    this.dblclickEvent.emit(event);
  }

  bindDblclickEvents(event: any): any {
    return event;
  }

  mousedown(event: any): void {
    event = this.bindMousedownEvents(event);
    this.mousedownEvent.emit(event);
  }

  bindMousedownEvents(event: any): any {
    return event;
  }

  mousemove(event: any): void {
    event = this.bindMousemoveEvents(event);
    this.mousemoveEvent.emit(event);
  }

  bindMousemoveEvents(event: any): any {
    return event;
  }

  mouseout(event: any): void {
    event = this.bindMouseoutEvents(event);
    this.mouseoutEvent.emit(event);
  }

  bindMouseoutEvents(event: any): any {
    return event;
  }

  mouseover(event: any): void {
    event = this.bindMouseoverEvents(event);
    this.mouseoverEvent.emit(event);
  }

  bindMouseoverEvents(event: any): any {
    return event;
  }

  mouseup(event: any): void {
    event = this.bindMouseupEvents(event);
    this.mouseupEvent.emit(event);
  }

  bindMouseupEvents(event: any): any {
    return event;
  }

  mousewheel(event: any): void {
    event = this.bindMousewheelEvents(event);
    this.mousewheelEvent.emit(event);
  }

  bindMousewheelEvents(event: any): any {
    return event;
  }

  wheel(event: any): void {
    event = this.bindWheelEvents(event);
    this.wheelEvent.emit(event);
  }

  bindWheelEvents(event: any): any {
    return event;
  }

  // --------------------------------------
  // ----- Component data methods ---------
  // --------------------------------------

  fillModel(value: any): void {
    if (this.model !== undefined) {
      if (!(this.model instanceof BaseModel)) {
        console.error(
          'Model is not instance of BaseModel from @webblocksapp/class-validator',
        );
        return;
      }

      if (this.name === undefined) {
        console.error('Your input component must contain a name attribute');
        return;
      }

      this.model.setValue(this.name, value);
      this.value = this.model.getValue(this.name);
    }
  }

  validateField(): void {
    if (this.isReactiveForm === false) return;

    if (this.isReactiveForm === true) {
      this.model
        .validateField(this.name)
        .then(() => {
          this.setError();
        })
        .catch((error) => {
          this.setError(error[0]);
        })
        .finally(() => {
          this.setTouched();
          this.bindEventsAfterValidateField();
        });
    }
  }

  setTouched() {
    this.touched = true;
  }

  bindEventsAfterValidateField(): void {}

  setError(error: ValidationError = null): void {
    if (!isNull(error)) {
      const { constraints } = error;
      this.error = (Object.values(constraints)[0] as string) || '';
      this.error = capitalize(this.error);
      this.setTouched();
    } else {
      this.error = '';
    }
  }

  refresh(): void {}

  watchModel(): void {
    if (this.model !== undefined && this.name !== undefined) {
      if (this.modelDiffer === undefined) {
        this.modelDiffer = this.differs.find(this.model).create();
      }

      let value = this.model.getValue(this.name);

      if (typeof value !== 'object') {
        value = [value];
      }

      const changes = this.modelDiffer.diff(value);

      if (changes) {
        this.bindWatchModelEvents();
      }

      if (this.modelMounted === false && this.usingDatagroup === false) {
        this.subscribeToModelChanges();
      }

      this.modelMounted = true;
    }
  }

  bindWatchModelEvents(): void {}

  private subscribeToModelChanges(): void {
    const subject = this.model.getChange();
    this.changes$ = subject.subscribe(() => {
      this.touched = this.model.getSubmitted()
        ? true
        : this.model.getIsTouched(this.name);
      this.setError(this.model.getError(this.name));
    });
  }

  private unSubscribeToModelChanges(): void {
    if (this.changes$ !== undefined) {
      this.changes$.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.unSubscribeToModelChanges();
  }
}
