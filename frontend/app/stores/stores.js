import appDispatcher from '../dispatcher/app_dispatcher.js';
import Request from '../common/services/getData_service.js';
import { constants } from '../constants/constants.js';

let dataStore = {};
let elementListener = [];

class Store {

  get allData() {
    return dataStore;
  }

  addElementListener(element) {
    elementListener.push(element)
  }

  dispatcherIndex() {
    appDispatcher.register((payload) => {
      const actionType = payload.actionType;

      switch (actionType) {
        case constants.INIT_ACTION:
            dataStore = payload.data;
            let initEvent = new CustomEvent('init', {
              bubbles: true
            });

            for(let element of elementListener) {

              element.dispatchEvent(initEvent);
            };
            break;

        case constants.ADD_ACTION:
            dataStore = payload.data;
            let addEvent = new CustomEvent('add', {
              bubbles: true
            });

            for(let element of elementListener) {

              element.dispatchEvent(addEvent);
            };
            break;

        default:
          return true;
      }
    });
  }

}

export let store = new Store();
