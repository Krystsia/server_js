import getArticles from '../../services/getArticles';


export default class EditNewArticleCtrl {
  constructor($state, FileUploader, getArticles) {
    this.data = {};
    this.uploader = new FileUploader({
      url: '/updateNewArticle'
    })

    this.$onInit = () => {
      this.addData();
      let data = getArticles.toArticles.get({articleId: this.articleId}, () => {
       this.article = data.articles[0];
       this.data = {
         content: this.article.content,
         title: this.article.title,
         articleId: this.articleId
       }
      })

      this.uploader.removeAfterUpload = true;
      this.uploader.onCompleteAll  = () => {
       this.uploader.destroy();
       $state.go('admin');
      }

      this.uploader.onErrorItem = function(fileItem, response, status, headers) {
         console.info('onErrorItem', fileItem, response, status, headers);
      }
    }
  }

  addData() {
    this.uploader.formData = [];
    this.uploader.formData.push({title: this.data.title});
    this.uploader.formData.push({content: this.data.content});
    this.uploader.formData.push({articleId: this.data.articleId});
  }


  onUpdateArticle = () => {
    this.uploader.uploadAll();
  }

}

EditNewArticleCtrl['$inject'] = ['$state', 'FileUploader', 'getArticles'];
