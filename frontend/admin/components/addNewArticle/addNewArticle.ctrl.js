import getArticles from '../../services/getArticles';

export default class AddNewArticleCtrl {
  constructor($scope, FileUploader, getArticles) {
    this.data = {};
    this.uploader = new FileUploader({
      url: '/addNewArticle'
    })

    this.$onInit = () => {
      this.uploader.removeAfterUpload = true;
      this.uploader.onCompleteAll  = () => {
        this.uploader.destroy();
        $scope.$emit('reload');
        this.data = {};
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
  }

  onAddArticle() {
    this.uploader.uploadAll();
  }
}

AddNewArticleCtrl['$inject'] = ['$scope', 'FileUploader', 'getArticles'];
