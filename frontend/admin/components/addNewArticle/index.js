import angular from 'angular';
import AddNewArticleCtrl from './addNewArticle.ctrl';
import './addNewArticle.scss';

const addArticle = angular.module('components.addArticle', []);

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
