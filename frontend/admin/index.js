import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import pagination from 'angular-utils-pagination';


import routing from './app.routing';
import components from './components';
import getArticles from './services/getArticles';
import AdminCtrl from './admin.ctrl';



const app = angular.module('app', [uirouter, ngResource, pagination, components, getArticles]);

app.config(routing);

app.config(["$locationProvider", ($locationProvider) => {
  $locationProvider.html5Mode(true);
}]);

app.controller('AdminCtrl', AdminCtrl);

angular.element(document).ready(()=>{
  angular.bootstrap(document, ['app']);
});
