import { useCallback, useLayoutEffect } from 'react';

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
  useLayoutEffect(() => {
    add();

    return remove;
  }, [third]);
};

export default useToggleEventListner;
