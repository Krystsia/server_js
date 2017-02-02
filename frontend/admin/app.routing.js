import getArticles from './services/getArticles';


export default function routing($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise('/admin');

  $stateProvider
    .state('admin', {
      url: '/admin',
      template: require("./admin.html"),
      controller: 'AdminCtrl',
      controllerAs: 'AdminCtrl'
    })
    .state('editArticle', {
      url: '/admin/editArticle/:articleID',
      template: require("./edit-article.html"),
      controller: function($stateParams) {
        this.articleID = $stateParams.articleID;
      },
      controllerAs: 'editArticleCtrl'
    })
}
