const BlogArticle = require('../../models/blog-article').BlogArticle;

module.exports = (req, res, next) => {
  BlogArticle.find({}, (err, result) => {
    let shapeResult = {
      articles: result
    }
    res.json(shapeResult);
  })
};
