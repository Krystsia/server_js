import { actions } from '../actions/actions.js';
import Highlight from '../common/services/highlight_service.js';


let a = require('../some.json');

console.log(a);

((d) => {
    actions.init();
    document.querySelector('.all-visited').addEventListener('click', () => {
      new Highlight().highlight();
    })
})(document);
