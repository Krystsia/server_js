import angular from 'angular';

import angularFileUpload from '../../../node_modules/angular-file-upload/dist/angular-file-upload.js';
import AddNewArticleCtrl from './addNewArticle.ctrl';
import './addNewArticle.scss';

const addArticle = angular.module('components.addArticle', ['angularFileUpload']);

addArticle.controller('addNewArticleCtrl', AddNewArticleCtrl);

function addNewArticle() {
  return {
    restrict: 'E',
    template: require('./addNewArticle.html'),
    controller: 'addNewArticleCtrl',
    controllerAs: 'addNewArticleCtrl'
  }
}

export default addArticle
  .component('addNewArticle', addNewArticle())
  .name;
