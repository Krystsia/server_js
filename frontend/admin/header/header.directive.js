import { HeaderCtrl } from './header.ctrl.js';

(() => {
  angular.module('app')
    .directive('panel', Header);

    function Header() {
      return {
        restrict: 'E',
        templateUrl: './header.html',
        controller: HeaderCtrl,
        controllerAs: '$ctrl'
      }
    }
})
