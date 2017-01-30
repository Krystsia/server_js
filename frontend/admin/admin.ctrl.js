import getArticles from './services/getArticles';


export default class AdminCtrl {
  constructor(getArticles) {

    let data = getArticles.toArticles.get({}, () => {
      this.articles = data.articles;
    });




  }
}

AdminCtrl.$inject = ['getArticles'];
