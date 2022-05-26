type Options = Pick<AddEventListenerOptions, 'capture', 'passive', 'once'>;

type Target = HTMLElement | Document | Window | null;

declare function useToggleEventListener<
  K extends keyof (HTMLElementEventMap & DocumentEventMap & WindowEventMap)
>(
  type: K,
  handleEvent: (
    event: (HTMLElementEventMap & DocumentEventMap & WindowEventMap)[K]
  ) => void,
  targets?: Target[],
  options?: Options
): void;

export as namespace useToggleEventListener;
export default useToggleEventListener;
