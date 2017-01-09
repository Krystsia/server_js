import Request from '../common/services/getData_service.js';
import appDispatcher from '../dispatcher/app_dispatcher.js';
import { store } from '../stores/stores.js';
import Article from '../components/article-component/article_component.js';
import MoreNews from '../components/more-new-component/more_news_component.js';
import { passwordAccess } from '../constants/constants.js';
import RequestString from '../common/services/getRequest_service.js';

const requestString = new RequestString();

class Actions {
  init() {
    store.dispatcherIndex();
    let articles = new Article();
    let moreNews = new MoreNews();
    articles.onInit();
    moreNews.onInit();
    const mainRequest = new Request(passwordAccess, 'GET', requestString.next(), {Accept: 'xyz'});
    mainRequest.getData()
      .then((data) => {
          if (NODE_ENV == 'development') {
              console.log(data);
          }
          appDispatcher.handleInitAction(data);
      })
  }
  add() {
    const mainRequest = new Request(passwordAccess, 'GET', requestString.next(), {Accept: 'xyz'});
    mainRequest.getData()
      .then((data) => {
          if (NODE_ENV == 'development') {
              console.log(data);
          }
          appDispatcher.handleAddAction(data);
    })
  }

  destroy() {}
}

export let actions = new Actions();
