const debounce = (fn: Function, timer = 400): ((...args: string[]) => void) => {
  let timeoutId: number;
  let start: number;
  return (...args: string[]): void => {
    if (!timeoutId) {
      start = performance.now();
      timeoutId = setTimeout(fn, timer, args);
    } else {
      if (performance.now() - start < timer) {
        clearTimeout(timeoutId);
        start = performance.now();
        timeoutId = setTimeout(fn, timer, args);
      } else {
        start = performance.now();
        timeoutId = setTimeout(fn, timer, args);
      }
    }
  };
};

export default debounce;
