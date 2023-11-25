import { controls, sounds } from './elements.js';
import * as actions from './actions.js';

export function registerControls() {
  controls.addEventListener('click', e => {
    const action = e.target.dataset.action;

    if (action === undefined) {
      return;
    }

    if (typeof actions[action] != 'function') {
      return;
    }

    actions[action]();
  });

  sounds.addEventListener('click', e => {
    const action = e.target.dataset.action;

    if (action === undefined) {
      return;
    }

    if (typeof actions[action] != 'function') {
      return;
    }

    actions[action]();
  });
}
