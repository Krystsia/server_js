import angular from 'angular';

class GetArticles {
  constructor($resource) {
    this.url = '/getArticles';
    this.addUrl = '/addNewArticle';
    this.toArticles = $resource(this.url);
    this.addArticle = $resource(this.addUrl);
  }
}

export default angular.module('services.get-articles', [])
  .service('getArticles', GetArticles)
  .name;

GetArticles['$inject'] = ['$resource'];
