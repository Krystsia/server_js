import getArticles from '../../services/getArticles';


export default class EditNewArticleCtrl {
  constructor(FileUploader, getArticles) {


    this.uploader = new FileUploader({
      url: '/addNewArticle'
    });

    this.uploader.removeAfterUpload = true;

    this.uploader.onCompleteAll  = () => {
      this.uploader.destroy();
    }

    this.$onInit = () => {
     let data = getArticles.toArticles.get({articleId: this.articleId}, () => {
       this.article = data.articles[0];
       this.data = {
         content: this.article.content,
         title: this.article.title,
         articleId: this.articleId
       };
     });
    }

    this.$onChanges = () => {
      this.uploader.formData.push(this.data);
    }
  }

  onUpdateArticle() {
    this.uploader.uploadAll();
  }
}

EditNewArticleCtrl['$inject'] = ['FileUploader', 'getArticles'];
