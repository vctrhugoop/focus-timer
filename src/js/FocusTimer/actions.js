import state from './state.js';
import * as sounds from './sounds.js';
import * as elements from './elements.js';

let currentSound = null;

export function startStop() {
  state.isRunning = document.documentElement.classList.toggle('running');
  sounds.buttonPress.play();
}
export function stop() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  sounds.buttonPress.play();
}

export function stopCurrentSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    console.log('oi');
  }
}

export function setSoundState(target) {
  stopCurrentSound();

  const soundOptions = [
    'sound-florest',
    'sound-rain',
    'sound-coffee',
    'sound-fireplace',
  ];

  const isTargetActive = document.documentElement.classList.contains(target);

  soundOptions.forEach(option => {
    if (option === target) {
      if (isTargetActive) {
        state.isSound = document.documentElement.classList.remove(target);
      } else {
        state.isSound = document.documentElement.classList.add(target);
      }
    } else {
      state.isSound = document.documentElement.classList.remove(option);
    }
  });

  if (isTargetActive) {
    currentSound = null;
  } else {
    if (target === 'sound-florest') {
      currentSound = sounds.florest;
      currentSound.play();
    } else if (target === 'sound-rain') {
      currentSound = sounds.rain;
      currentSound.play();
    } else if (target === 'sound-coffee') {
      currentSound = sounds.coffeeShop;
      currentSound.play();
    } else if (target === 'sound-fireplace') {
      currentSound = sounds.fireplace;
      currentSound.play();
    }
  }
}

export function soundFlorest() {
  setSoundState('sound-florest');
}
export function soundRain() {
  setSoundState('sound-rain');
}
export function soundCoffeeShop() {
  setSoundState('sound-coffee');
}
export function soundFireplace() {
  setSoundState('sound-fireplace');
}
