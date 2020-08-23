import { Type, Size } from '../types/input.type';

export interface BsBaseInterface {
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
   * Form input type.
   */
  type: Type;
  /**
   * Form input hint text.
   */
  help: string;
  /**
   * Appends an icon at the beginning of the input.
   */
  startIcon: string;
  /**
   * Appends an html tag with an icon class at the beginning of the input.
   */
  startIconHtml: string;
  /**
   * Appends an icon at the end of the input.
   */
  endIcon: string;
  /**
   * Appends an html tag with an icon class at the end of the input.
   */
  endIconHtml: string;
  /**
   * Form input size.
   */
  size: Size;
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
   * A callback method that is invoked immediately after
   * a default set of properties changes occurs.
   * Do not override this method on a child component
   * that inherits it.
   */
  alwaysDetectChanges(propName: string): void;
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
   * Sets component name attribute.
   */
  setComponentUniqueName(): void;
  /**
   * Sets component placeholder attribute.
   */
  setComponentEmptyPlaceholder(): void;
  /**
   * Computes component size class.
   */
  getInputSize(): void;
  /**
   * Fills the input value according to the model provided
   */
  fillValue(event: any): void;
}
