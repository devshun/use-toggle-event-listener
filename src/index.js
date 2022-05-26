import { useCallback, useEffect } from 'react';

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

  useEffect(() => {
    add();
    return remove;
  }, [add, remove]);
};

export default useToggleEventListner;
