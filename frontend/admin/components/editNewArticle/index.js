import angular from 'angular';
import EditNewArticleCtrl from './editNewArticle.ctrl';
import  './editNewArticle.scss';

const editArticle = angular.module('components.editArticle', []);

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
