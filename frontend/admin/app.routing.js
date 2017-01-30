export default function routing($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('admin', {
      url: '/admin',
      template: `<a ui-sref=".editArticle">add</a>`
    })
    .state('admin.addArticle', {
      url: '/addArticle',
      template: require("html-loader?interpolate!./add-aritcle.html"),
      controller: 'HomeController',
      controllerAs: 'home'
      //  `${require('./add-aritcle.html')}`
    })
    .state('admin.editArticle', {
      url: '/editArticle',
      template: `<div>Heeloooooooo!</div>`
    })
}
