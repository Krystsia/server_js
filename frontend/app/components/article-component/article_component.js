import { store } from '../../stores/stores.js';
import DateService from '../../common/services/getDate_service.js';
import ToggleDescription from '../../common/services/toggleDescription-service.js';
import Highlight from '../../common/services/highlight_service.js';

export default class Article {
  onInit() {
    let element = document.querySelector('.articles');
    store.addElementListener(element);
    element.addEventListener('init', () => {
      repaint(element);
    });
    element.addEventListener('add', () => {
      add(element);
    });
    initialEvents('mouseover', ToggleDescription.showDescription);
  }
}

function constructArticles() {
  let data = store.allData;

  let { articles: allArticles = [] } = data;

  let fragment = document.createDocumentFragment();

  allArticles = allArticles.map((article) => {
    let li = document.createElement('li');

    li.innerHTML = `<a href="${article.url}" target="blank">
                        <h2>${article.title}</h2>
                        <p class="published-at">${new DateService().getDate(article.publishedAt)}</p>
                        <img src="${article.urlToImage}" alt="image"/>
                        <p class="descriptor"><span>${article.description}</span><p>
                    </a>`;
    li.addEventListener('click', () => {
       new Highlight().add(li);
    });

    li.highlight = () => {
      li.classList.add('highlight');
    }

    return li;
  });

  let tempArticleStore = [];

  for(let li of allArticles) {
      if(!tempArticleStore.some((item) => (item === li.innerHTML))) {
          tempArticleStore.push(li.innerHTML);
          fragment.appendChild(li);
      }
  }

  return fragment;

}

function repaint(element) {
  element.innerHTML = '';
  element.appendChild(constructArticles());
}

function add(element) {
  element.appendChild(constructArticles());
}

function initialEvents(evenName, callback) {
    let articles = document.querySelector('.articles');
    articles.addEventListener(evenName, callback);
}
