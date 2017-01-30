import angular from 'angular';
//import articleModer from '../models/article.model';

// class getArticles {
//   constructor(articleModel) {
//     this model = articleModel.getData;
//   }
//   getAllArticles() {
//     fetch('/getArticles', {method: "GET"}).then((response) => {
//         return response.json();
//       }).then((data) => {
//         return model(data);
//       }).catch(error => {
//         console.log(error);
//       });
//   }
// }

class GetArticles {
  constructor($resource) {
    this.url = '/getArticles'
    this.toArticles = $resource(this.url);
  }
}

export default angular.module('services.get-articles', [])
  .service('getArticles', GetArticles)
  .name;

GetArticles.$inject = ['$resource'];
