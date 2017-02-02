import angular from 'angular';
import EditNewArticleCtrl from './editNewArticle.ctrl';
import angularFileUpload from '../../../node_modules/angular-file-upload/dist/angular-file-upload.js';
import  './editNewArticle.scss';

const editArticle = angular.module('components.editArticle', ['angularFileUpload']);

editArticle.controller('editNewArticleCtrl', EditNewArticleCtrl);

function editNewArticle() {
  return {
    bindings: {
      articleId: '<'
    },
    restrict: 'E',
    template: require('./editNewArticle.html'),
    controller: 'editNewArticleCtrl',
    controllerAs: 'editNewArticleCtrl'
  }
}

export default editArticle
  .component('editNewArticle', editNewArticle())
  .name;
