type Options = Pick<AddEventListenerOptions, 'capture', 'passive', 'once'>;

type Target = HTMLElement | Document | Window | null;

declare function useToggleEventListener<
  T extends keyof (HTMLElementEventMap & DocumentEventMap & WindowEventMap)
>(
  type: T,
  handleEvent: (
    event: (HTMLElementEventMap & DocumentEventMap & WindowEventMap)[K]
  ) => void,
  targets?: Target[],
  options?: Options
): void;

export as namespace useToggleEventListener;
export default useToggleEventListener;
