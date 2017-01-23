import './styles/more-news.scss';

import Request from '../../../common/services/getData_service.js';
import Article from '../../../common/components/articleComponent/article.js';


export default class MoreNews {
   getNews() {
       let mainRequest = new Request('f1fdf072013c4b1e8b92b027a92a8977', 'GET', 'https://newsapi.org/v1/articles?source=bbc-sport', {Accept: 'xyz'});
       
       mainRequest.getData().then((data) => { 
            
            if (NODE_ENV == 'development') {
                console.log(data);
            }
            
            Article.init(data, '.articles');    
        });
   }
}