import angular from 'angular';
import ArticleCtrl from './article.ctrl';
import './article.scss';

const article = angular.module('components.article', []);

article.controller('articleCtrl', ArticleCtrl);

function blogArticle() {
  return {
    bindings: {
      articleData: '<'
    },
    restrict: 'E',
    template: require('./article.html'),
    controller: 'articleCtrl',
    controllerAs: 'articleCtrl'
  }
}

export default article
  .component('blogArticle', blogArticle())
  .name;
