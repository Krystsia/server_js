import angular from 'angular';
import AddNewArticleCtrl from './addNewArticle.ctrl';
import './addNewArticle.scss';

const newArticle = angular.module('components.newArticle', []);

newArticle.controller('addNewarticleCtrl', AddNewArticleCtrl);

function addNewArticle() {
  return {
    restrict: 'E',
    template: require('./addNewarticle.html'),
    controller: 'addNewarticleCtrl',
    controllerAs: 'addNewarticleCtrl'
  }
}

export default newArticle
  .component('addNewArticle', addNewArticle())
  .name;
