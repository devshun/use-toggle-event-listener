type Options = Pick<AddEventListenerOptions, 'capture', 'passive', 'once'>;

declare function useToggleEventListener<T extends keyof HTMLElementEventMap>(
  type: T,
  handleEvent: HTMLElementEventMap[T],
  targets: HTMLElement[],
  options?: Options
): void;


