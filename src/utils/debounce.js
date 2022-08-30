const debounce = (func, milliseconds = 700) => {
  let timerId;

  return (e) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(e);
    }, milliseconds);
  };
};

export default debounce;
