import {combineReducers} from 'redux';
import user from './user';
import articles from './articles';
import filterArticles from './filterArticles';

export default combineReducers({
  user,
  articles,
  filterArticles
})
