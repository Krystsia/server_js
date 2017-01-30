import angular from 'angular';
import AddNewArticleCtrl from './addNewArticle.ctrl';
import './article.scss';

const newArticle = angular.module('components.newArticle', []);

article.controller('addNewarticleCtrl', AddNewArticleCtrl);

function addNewArticle() {
  return {
    restrict: 'E',
    template: require('./addNewarticle.html'),
    controller: 'addNewarticleCtrl',
    controllerAs: 'addNewarticleCtrl'
  }
}

export default article
  .component('newArticle', addNewArticle())
  .name;
