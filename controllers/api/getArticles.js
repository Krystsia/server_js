const BlogArticle = require('../../models/blog-article').BlogArticle;

module.exports = (req, res, next) => {
  console.log(req.query);
  const filterQuery = req.query.articleId ? {"_id" : req.query.articleId} : {};
  BlogArticle.find(filterQuery, (err, result) => {
    let shapeResult = {
      articles: result
    }
    res.json(shapeResult);
  })
};
