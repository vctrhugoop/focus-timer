import state from './state.js';
import * as sounds from './sounds.js';

export function startStop() {
  state.isRunning = document.documentElement.classList.toggle('running');
  sounds.buttonPress.play();
}
export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  sounds.buttonPress.play();
}

let currentSound = null;

export function soundFlorest() {
  document.querySelector('.btn-sound-florest').classList.toggle('active');

  if (
    (state.isSound = document.documentElement.classList.toggle('sound-active'))
  ) {
    if (currentSound == null) {
      currentSound = sounds.florest;
    } else {
      console.log('não estou vazio');
    }
  } else {
    currentSound.pause();
  }
}
export function soundRain() {
  document.querySelector('.btn-sound-rain').classList.toggle('active');
  if (
    (state.isSound = document.documentElement.classList.toggle('sound-active'))
  ) {
    if (currentSound == null) {
      currentSound = sounds.rain;
      console.log(currentSound);
    } else {
      console.log('não estou vazio');
    }
  } else {
    currentSound.pause();
  }
}
export function soundCoffeeShop() {
  state.isSound = document
    .querySelector('.btn-sound-coffee')
    .classList.toggle('active');

  if (
    (state.isSound = document
      .querySelector('.btn-sound-coffee')
      .classList.contains('active'))
  ) {
    sounds.coffeeShop.play();
  } else {
    sounds.coffeeShop.pause();
  }
}
export function soundFireplace() {
  state.isSound = document
    .querySelector('.btn-sound-fireplace')
    .classList.toggle('active');

  if (
    (state.isSound = document
      .querySelector('.btn-sound-fireplace')
      .classList.contains('active'))
  ) {
    sounds.fireplace.play();
  } else {
    sounds.fireplace.pause();
  }
}
