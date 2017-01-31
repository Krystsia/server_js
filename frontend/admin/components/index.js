import angular from 'angular';
import blogArticle from './article';
import mainHeader from './header';
import addNewArticle from './addNewArticle';
import editNewArticle from './editNewArticle';

export default angular.module('components', [
  blogArticle,
  mainHeader,
  addNewArticle,
  editNewArticle
]).name;
