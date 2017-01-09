import { store } from '../../stores/stores.js';
import { actions } from '../../actions/actions.js';

export default class MoreNews {
  onInit() {
    let element = document.querySelector('.add-more-container');
    store.addElementListener(element);
    element.addEventListener('init', () => {
      repaint(element);
    });
  }
}

function construcAddMoreButton() {
    let button = document.createElement('button');
    button.classList.add('add-more');
    button.innerText = 'Add More';
    button.addEventListener('click', () => {
      actions.add();
    })
    return button;
}

function repaint(element) {
  element.appendChild(construcAddMoreButton());
}
