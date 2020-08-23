export interface BsInputInterface {
  /**
   * Emits keyup event.
   */
  keyup(event: any): void;
  /**
   * Set default keyup events and new bind keyup events.
   */
  setKeyupEvents(event: any): void;
  /**
   * Default keyup events that are always set.
   */
  setAlwaysKeyupEvents(event: any): void;
  /**
   * Register on this method new actions to be bind on keyup event.
   */
  bindKeyupEvents(event: any): any;
  /**
   * Fills the input value according to the model provided
   */
  fillValue(event: any): void;
}
