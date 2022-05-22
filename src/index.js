import { useCallback, useEffect, useLayoutEffect } from 'react';

const useToggleEventListner = ({ type, handleEvent, targets, option }) => {
  const add = useCallback(() => {
    targets.forEach((target) => {
      target.addEventListener((type, handleEvent, option || false));
    });
  }, [type, handleEvent, targets]);

  const remove = useCallback(() => {
    targets.forEach((target) => {
      target.removeEventListener((type, handleEvent, option || false));
    });
  }, [type, handleEvent, targets]);

  const saveHandleEvent = useRef();

  useEffect(() => {
    saveHandleEvent.current = handleEvent;
  }, []);

  useLayoutEffect(() => {
    add();

    return remove;
  }, [add, remove]);
};

export default useToggleEventListner;
