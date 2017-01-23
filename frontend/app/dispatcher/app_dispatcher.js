import Dispatcher from './dispatcher.js';
import { constants } from '../constants/constants.js'

class AppDispatcher extends Dispatcher{
    handleViewAction(action) {
        this.dispatch({
            actionType: constants.VIEW_ACTION,
            action: action
        })
    }

    handleInitAction(data) {
      console.log(data);
        this.dispatch({
            actionType: constants.INIT_ACTION,
            data: data
        })
    }

    handleAddAction(data) {
      console.log(data);
        this.dispatch({
            actionType: constants.ADD_ACTION,
            data: data
        })
    }
}

export default new AppDispatcher;
