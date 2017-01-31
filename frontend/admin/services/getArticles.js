import angular from 'angular';

class GetArticles {
  constructor($resource) {
    this.url = '/getArticles'
    this.toArticles = $resource(`${this.url}/:articleID`, {articleID: '@id'});
  }
}

export default angular.module('services.get-articles', [])
  .service('getArticles', GetArticles)
  .name;

GetArticles.$inject = ['$resource'];
