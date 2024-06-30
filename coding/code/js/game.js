const key = {
  keyDown: {},
  keyValue: {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down',
  },
};

const windowEvent = () => {
  window.addEventListener('keydown', (e) => {
    console.log(e.code);
    key.keyDown[key.keyValue[e.code]] = true;
    console.log(key.keyDown);
  });

  window.addEventListener('keyup', (e) => {
    key.keyDown[key.keyValue[e.code]] = false;
    console.log(key.keyDown);
  });
};

const init = () => {
  windowEvent();
};

window.onload = () => {
  // onload 찾아볼것
  init();
};
