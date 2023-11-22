import { controls, sounds } from './elements.js';

export function registerControls() {
  controls.addEventListener('click', e => {
    const action = e.target.dataset.action;

    if (action === undefined) {
      return;
    }
  });

  sounds.addEventListener('click', e => {
    const action = e.target.dataset.action;

    if (action === undefined) {
      return;
    }
  });
}
