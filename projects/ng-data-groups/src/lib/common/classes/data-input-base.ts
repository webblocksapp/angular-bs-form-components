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
  DoCheck,
  AfterContentInit,
} from '@angular/core';

import {
  DataInputBaseInterface,
  FormEventsInterface,
  KeyboardEventsInterface,
  MouseEventsInterface,
} from '../interfaces';
import * as uuid from 'uuid';
import { BaseModel } from './base-model';
import { InputType } from '../types';
import { capitalize, isNull } from '../utils';
import { ValidationError } from '@webblocksapp/class-validator';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

// tslint:disable-next-line: no-conflicting-lifecycle
@Directive()
// tslint:disable-next-line: directive-class-suffix
export abstract class DataInputBase
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit,
    OnChanges,
    OnDestroy,
    DoCheck,
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
  @Input() size: any;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  @Input() help: string;
  @Input() startSlot: string;
  @Input() startSlotHtml: string;
  @Input() endSlot: string;
  @Input() endSlotHtml: string;
  @Input() autocomplete: boolean;
  @Input() model: BaseModel;
  @Input() highlightOnValid: boolean = false;

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

  public error: string;
  public isReactiveForm: boolean = true;
  public touched: boolean = false;
  public isValid: boolean = false;
  public isInvalid: boolean = false;
  public value: any = null;
  public form: NgForm;
  private modelValueDiffer: KeyValueDiffer<string, any>;
  private modelConfigsDiffer: KeyValueDiffer<string, any>;
  private modelWatcherMounted: boolean = false;
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
    this.setConfigsOnChanges();
  }

  ngAfterContentInit() {
    this.alwaysSetConfigsAfterContentInit();
    this.setConfigsAfterContentInit();
  }

  ngAfterViewInit(): void {
    this.alwaysSetConfigsAfterViewInit();
    this.setConfigsAfterViewInit();
  }

  ngDoCheck(): void {
    this.watchModel();
    this.setConfigsOnDoCheck();
  }

  // ----------------------------------------------------------------
  // ------- Component configs on init and changes detection  -------
  // ------------------ for computed attributes ---------------------
  // ----------------------------------------------------------------

  alwaysSetConfigsOnInit(): void {
    this.setComponentUniqueId();
  }

  alwaysSetConfigsAfterContentInit(): void {}

  alwaysSetConfigsAfterViewInit(): void {}

  setConfigsOnInit(): void {}

  setConfigsAfterContentInit(): void {}

  setConfigsAfterViewInit(): void {}

  setConfigsOnChanges(): void {}

  setConfigsOnDoCheck(): void {}

  setConfigsOnDestroy(): void {}

  alwaysDetectPropertiesChanges(propName: string): void {
    if (propName === 'disabled') {
      this.computeDisabledProperty();
      this.computeIsValidProperty();
      this.computeIsInvalidValidProperty();
    }
    if (propName === 'highlightOnValid') this.computeIsValidProperty();
    if (propName === 'readonly') {
      this.computeReadonlyProperty();
      this.computeIsValidProperty();
      this.computeIsInvalidValidProperty();
    }
  }

  computeIsValidProperty(): void {
    this.isValid =
      this.touched &&
      this.highlightOnValid &&
      !this.error &&
      !this.disabled &&
      !this.readonly
        ? true
        : false;
  }

  computeIsInvalidValidProperty(): void {
    this.isInvalid =
      this.error && !this.disabled && !this.readonly ? true : false;
  }

  detectPropertiesChanges(propName: string): void {}

  setComponentUniqueId(): void {
    if (this.id === undefined) this.id = uuid.v4();
  }

  initializeComponentNullValue(): void {
    if (isNull(this.value)) {
      this.fillModel(null);
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

  computeHighlightOnValid(): void {
    this.highlightOnValid = this.model?.configs?.highlightOnValid || false;
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

  submitForm(): void {
    if (this.form !== undefined) this.form.ngSubmit.emit();
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
      this.value = value;
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

  bindEventsAfterValidateField(): void {}

  setError(error: ValidationError = null): void {
    if (!isNull(error)) {
      const { constraints } = error;
      this.error = (Object.values(constraints)[0] as string) || '';
      this.error = capitalize(this.error);
    } else {
      if (!isNull(this.value) || this.model.isResetting) {
        this.error = '';
      }
    }

    this.computeIsValidProperty();
    this.computeIsInvalidValidProperty();
  }

  refresh(): void {}

  watchModel(): void {
    if (this.model !== undefined && this.name !== undefined) {
      this.initDiffers();
      this.watchModelValueChanges();
      this.watchModelConfigsChanges();

      if (this.modelWatcherMounted === false) {
        this.initializeComponentNullValue();
        this.subscribeToModelChanges();
      }

      this.modelWatcherMounted = true;
    }
  }

  initDiffers(): void {
    if (this.modelValueDiffer === undefined) {
      this.modelValueDiffer = this.differs.find(this.model).create();
    }

    if (this.modelConfigsDiffer === undefined) {
      this.modelConfigsDiffer = this.differs.find(this.model).create();
    }
  }

  watchModelValueChanges(): void {
    if (this.modelValueDiffer !== undefined) {
      let value = this.model.getValue(this.name);

      if (typeof value !== 'object') {
        value = [value];
      }

      const valueChange = this.modelValueDiffer.diff(value);

      if (valueChange) {
        this.fillModel(this.model.getValue(this.name) || null);
        this.bindWatchModelEvents();
      }
    }
  }

  watchModelConfigsChanges(): void {
    if (this.modelConfigsDiffer !== undefined) {
      let configs = this.model?.configs;

      if (configs !== undefined) {
        const configsChange = this.modelConfigsDiffer.diff(configs);

        if (configsChange) {
          this.runModelConfigsEvents();
        }
      }
    }
  }

  bindWatchModelEvents(): void {}

  private runModelConfigsEvents(): void {
    this.computeHighlightOnValid();
    this.refresh();
  }

  private subscribeToModelChanges(): void {
    const subject = this.model.getChange();
    this.changes$ = subject.subscribe(() => {
      this.setTouched();
      this.setError(this.model.getError(this.name));
      this.refresh();
    });
  }

  private setTouched() {
    if (isNull(this.value)) {
      this.touched = false;
    } else {
      this.touched = this.model.isSubmitted
        ? true
        : this.model.getIsTouched(this.name);
    }

    this.computeIsValidProperty();
  }

  private unSubscribeToModelChanges(): void {
    if (this.changes$ !== undefined) {
      this.changes$.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    this.unSubscribeToModelChanges();
    this.setConfigsOnDestroy();
  }
}
