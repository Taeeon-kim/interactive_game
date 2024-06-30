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
    // hero.keyMotion();
    console.log(key.keyDown);
  });

  window.addEventListener('keyup', (e) => {
    key.keyDown[key.keyValue[e.code]] = false;
    // hero.keyMotion();
    console.log(key.keyDown);
  });
};

const renderGame = () => {
  hero.keyMotion();
  window.requestAnimationFrame(renderGame); //60프레임 재귀함수
  console.log('call request');
};

const loadImage = () => {
  const preLoadImageSrc = [
    '../../../lib/images/ninja_attack.png',
    '../../../lib/images/ninja_run.png',
  ];
  preLoadImageSrc.forEach((src) => {
    const image = new Image();
    image.src = src;
  });
};

const init = () => {
  hero = new Hero('.hero');
  loadImage();
  windowEvent();
  renderGame();
};

window.onload = () => {
  // onload 찾아볼것
  init();
};
