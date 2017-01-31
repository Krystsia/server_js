import getArticles from '../../services/getArticles';


export default class EditNewArticleCtrl {
  constructor(getArticles) {

    let data = getArticles.toArticles.get({}, () => {
      this.articles = data.articles;
    });
  }
}

EditNewArticleCtrl['$inject'] = ['getArticles'];
