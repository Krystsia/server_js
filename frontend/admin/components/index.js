import angular from 'angular';
import blogArticle from './article';
import mainHeader from './header';
import addNewArticle from './addNewArticle';

export default angular.module('components', [blogArticle, mainHeader, addNewArticle]).name;
