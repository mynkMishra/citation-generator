const debounce = function (fn: Function, timer = 400) {
  let timeoutId: number;
  let start: number;
  return function (...args: string[]) {
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
