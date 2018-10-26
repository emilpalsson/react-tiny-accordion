// https://github.com/facebook/jest/issues/4545
global.requestAnimationFrame = global.requestAnimationFrame || function (cb) {
  return setTimeout(cb, 0);
};
global.cancelAnimationFrame = global.cancelAnimationFrame || global.clearTimeout