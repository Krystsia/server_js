import './styles/article.scss';


import ArticleModel from './article_model.js';
import ArticleCtrl from './article_ctrl.js';
import ArticleView from './article_view.js';
import ToggleDescription from '../../services/toggleDescription-service.js';

export default class Article {
    static init(data, element) {
        let { articles: allArticles = [] } = data;
        let fragment = document.createDocumentFragment();
        allArticles = allArticles.map((article) => {
            let itemModel = new ArticleModel(article);
            let itemCtrl = new ArticleCtrl(itemModel)
            return new ArticleView(itemModel, itemCtrl).constructTemplate();
        });

        let tempArticleStore = [];

        for(let li of allArticles) {
            if(!tempArticleStore.some((item) => (item === li.innerHTML))) {
                tempArticleStore.push(li.innerHTML);
                fragment.appendChild(li);
            }
        }

        document.querySelector(element).appendChild(fragment);
        hideLoader();
        initialEvents('mouseover', ToggleDescription.showDescription);
    };

    static add(data, element) {
      const { articles: newArticle = [] } = data;

      let itemModel = new ArticleModel(newArticle);
      let itemCtrl = new ArticleCtrl(itemModel);
      let li = new ArticleView(itemModel, itemCtrl).constructTemplate();

      document.querySelector(element).prepend(li);
    }
}

function hideLoader() {
    let backdrop = document.querySelector('.backdrop'),
        loader = document.querySelector('.loader');

    loader.style.opacity = '0';
    loader.style.display = 'none';
    backdrop.style.opacity = '0';
    backdrop.style.display = 'none';
}

function initialEvents(evenName, callback) {
    let articles = document.querySelector('.articles');
    articles.addEventListener(evenName, callback);
}
