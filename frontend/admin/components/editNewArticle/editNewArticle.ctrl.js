import getArticles from '../../services/getArticles';


export default class EditNewArticleCtrl {
  constructor(getArticles) {

     this.$onInit = () => {
       let data = getArticles.toArticles.get({articleId: this.articleId}, () => {
         this.article = data.articles[0];
       });
     }
  }
}

EditNewArticleCtrl['$inject'] = ['getArticles'];
