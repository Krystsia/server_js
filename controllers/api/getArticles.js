const BlogArticle = require('../../models/blog-article').BlogArticle;

module.exports = (req, res, next) => {
  const filterQuery = req.query.articleId ? {"_id" : req.query.articleId} : {};
  console.log(filterQuery);
  BlogArticle.find(filterQuery, (err, result) => {
    let shapeResult = {
      articles: result
    }
    res.json(shapeResult);
  })
};
