import state from './state.js';
import * as sounds from './sounds.js';
import * as elements from './elements.js';
import * as timer from './timer.js';

let currentSound = null;

export function startStop() {
  state.isRunning = document.documentElement.classList.toggle('running');
  sounds.buttonPress.play();

  timer.countDown();
}
export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove('running');
  timer.updateDisplay();
  sounds.buttonPress.play();
}

export function moreFive() {
  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  minutes += 5;

  minutes = minutes > 60 ? 60 : minutes;

  seconds = 0;

  timer.updateDisplay(minutes);
  sounds.buttonPress.play();
}

export function minusFive() {
  let minutes = Number(elements.minutes.textContent);
  minutes -= 5;

  if (minutes < 0) {
    reset();
    sounds.kitchenTimer.play();
    return;
  }

  timer.updateDisplay(minutes);
  sounds.buttonPress.play();
}

export function stopCurrentSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
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
