const key = {
  keyDown: {},
  keyValue: {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down',
    KeyX: 'attack',
  },
};

let hero;

const windowEvent = () => {
  window.addEventListener('keydown', (e) => {
    console.log(e.code);
    key.keyDown[key.keyValue[e.code]] = true;
    hero.keyMotion();
    console.log(key.keyDown);
  });

  window.addEventListener('keyup', (e) => {
    key.keyDown[key.keyValue[e.code]] = false;
    hero.keyMotion();
    console.log(key.keyDown);
  });
};

const init = () => {
  hero = new Hero('.hero');
  windowEvent();
};

window.onload = () => {
  // onload 찾아볼것
  init();
};
