export default function routing($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('admin', {
      url: '/admin',
      template: require("./admin.html"),
      controller: 'AdminCtrl',
      controllerAs: 'AdminCtrl'
    })
    .state('addArticle', {
      url: '/admin/addArticle',
      template: require("./add-aritcle.html"),

      // controller: 'HomeController',
      // controllerAs: 'home'
      //  `${require('./add-aritcle.html')}`
    })
    .state('editArticle', {
      url: '/admin/editArticle/:articleID',
      template: `<div>Heeloooooooo!</div>`
    })
}
