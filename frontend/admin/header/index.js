import angular from 'angular';
import MainHeaderCtrl from './mainHeader.ctrl';

const header = angular.module('components.mainHeader', []);

header.controller('mainHeaderCtrl', MainHeaderCtrl);

function mainHeader() {
  return {
    restrict: 'E',
    template: require('./header.html'),
    controller: 'mainHeaderCtrl',
    controllerAs: '$ctrl'
  }
}

export default header
  .component('mainHeader', mainHeader())
  .name;
