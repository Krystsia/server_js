import getArticles from './services/getArticles';

import  './admin.scss';

export default class AdminCtrl {
  constructor($scope, getArticles) {

    $scope.$on('reload', () => {
      let data = getArticles.toArticles.get({}, () => {
        this.articles = data.articles;
      
      });
    });
    this.$onInit = () => {
      let data = getArticles.toArticles.get({}, () => {
        this.articles = data.articles;
      });
    };
  };
}

AdminCtrl['$inject'] = ['$scope', 'getArticles'];
