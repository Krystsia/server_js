import getArticles from './services/getArticles';


export default class AdminCtrl {
  constructor(getArticles) {

    getArticles.toArticles.get().$promise.then((data)=>{
      this.data = data;
    });

    //this.articles = this.data.articles;
    console.log(this.data);
  }
}

AdminCtrl.$inject = ['getArticles'];
