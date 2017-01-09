import '../common/style/reset.scss';

import Request from '../common/services/getData_service.js';
import Article from '../common/components/articleComponent/article.js';


((d) => {
    let mainRequest = new Request('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=national-geographic', {Accept: 'xyz'});

    d.addEventListener('DOMContentLoaded', function() {
        mainRequest.getData().then((data) => {

            if (NODE_ENV == 'development') {
                console.log(data);
            }

            Article.init(data, '.articles');
        });
    })
})(document);
