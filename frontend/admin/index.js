import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.routing';


require('./header/header.directive.js');

const app = angular.module('app', [uirouter]);

app.config(routing);

app.config(["$locationProvider", ($locationProvider) => {
  $locationProvider.html5Mode(true);
}]);

angular.element(document).ready(()=>{
  angular.bootstrap(document, ['app']);
});
