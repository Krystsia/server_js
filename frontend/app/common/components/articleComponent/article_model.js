import Model from '../../model/model.js';

class ArticleModel extends Model{
    constructor(article) {
        super(article);
        this.addField('title');
        this.addField('publishedAt');
        this.addField('description');
        this.addField('url');
        this.addField('source');
        this.addField('urlToImage');
        this.addField('abstract');
        this.addField('author');
    };
}

export default ArticleModel;







