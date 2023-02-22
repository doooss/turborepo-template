import { useState } from 'react';

function useBoolean(initialValue = false) {
  const [value, setState] = useState(initialValue);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);
  const toggle = () => setState((v) => !v);

  return [value, { setTrue, setFalse, toggle, setState }];
}

export default useBoolean;
