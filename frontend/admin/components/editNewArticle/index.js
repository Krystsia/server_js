import angular from 'angular';
import EditNewArticleCtrl from './editNewArticle.ctrl';
import  './editNewArticle.scss';

const editArticle = angular.module('components.newArticle', []);

editArticle.controller('editNewArticleCtrl', EditNewArticleCtrl);

function editNewArticle() {
  return {
    bindings: {
      articleData: '<'
    },
    restrict: 'E',
    template: require('./editNewArticle.html'),
    controller: 'EditNewArticleCtrl',
    controllerAs: 'editNewArticleCtrl'
  }
}

export default editArticle
  .component('editNewArticle', editNewArticle())
  .name;
