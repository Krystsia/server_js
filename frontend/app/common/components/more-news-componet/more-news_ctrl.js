import MoreNews from './more-news.js';

module.exports = {
    addMoreNews(element) {
        element.addEventListener('click', () => {
            new MoreNews().getNews();                
       })
    }
}

