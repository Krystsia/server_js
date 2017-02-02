import getArticles from '../../services/getArticles';

export default class AddNewArticleCtrl {
  constructor($scope, FileUploader, getArticles) {
    this.data = {};
    this.uploader = new FileUploader({
      url: '/addNewArticle'
    });

    this.uploader.removeAfterUpload = true;
    this.uploader.onCompleteAll  = () => {
      this.uploader.destroy();
      $scope.$emit('reload');
      this.data = {};
    }
    this.$onChanges = () => {
      this.uploader.formData.push(this.data);
    }
  }

  onAddArticle() {
    this.uploader.uploadAll();
  }
}

AddNewArticleCtrl['$inject'] = ['$scope', 'FileUploader', 'getArticles'];
