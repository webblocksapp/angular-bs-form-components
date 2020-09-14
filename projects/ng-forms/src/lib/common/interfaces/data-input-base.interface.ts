import { InputType, InputSize } from '../types';

export interface DataInputBaseInterface {
  /**
   * Form input unique id.
   */
  id: string;
  /**
   * Form input label.
   */
  label: string;
  /**
   * Form input name.
   */
  name: string;
  /**
   * Input placeholder.
   */
  placeholder: string;
  /**
   * Form input hint text.
   */
  help: string;
  /**
   * Appends an slot at the beginning of the input.
   */
  startSlot: string;
  /**
   * Appends an slot with rendered html at the beginning of the input.
   */
  startSlotHtml: string;
  /**
   * Appends an slot at the end of the input.
   */
  endSlot: string;
  /**
   * Appends an slot with rendered html at the end of the input.
   */
  endSlotHtml: string;
  /**
   * Form input type.
   */
  type: InputType;
  /**
   * Form input size.
   */
  size: InputSize;
  /**
   * Form input error.
   */
  error: string;
  /**
   * Form input value.
   */
  value: any;
  /**
   * Determines if the form is reactive.
   */
  isReactiveForm: boolean;
  /**
   * Computes component size class.
   */
  getInputSize(): void;
  /**
   * Parent component method to set default component configs.
   * Do not override this method on a child component
   * that inherits it.
   */
  alwaysSetConfigsOnInit(): void;
  /**
   * Init configs when component starts.
   */
  setConfigsOnInit(): void;
  /**
   * Detects always the registered properties changes on this method
   */
  alwaysDetectPropertiesChanges(propName: string): void;
  /**
   * A callback method that is invoked immediately after
   * a property change occurs.
   */
  detectPropertiesChanges(propName: string): void;
  /**
   * Sets component id attribute.
   */
  setComponentUniqueId(): void;
  /**
   * Validates component field.
   */
  validateField(): void;
  /**
   * Sets component error attribute.
   */
  setError(error: any): void;
}
