import {combineReducers} from 'redux';
import page from './page';
import user from './user';
import articles from './articles';

export default combineReducers({
  page,
  user,
  articles
})
