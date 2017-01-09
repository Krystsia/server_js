const BlogArticle = require('../../models/blog-article').BlogArticle;


module.exports = (req, res, next) => {

  let blogArticle = new BlogArticle({
    username: "Kirill",
    title: req.body.title,
    description: req.body.content,
    url: '#',
    publishedAt: new Date().toString()
  })
  console.log(req.session);

  blogArticle.save((err, blogArticle, affected) => {
    if(err) throw err;

    BlogArticle.findOne({title: req.body.title}, (err, result) => {
      let shapeResult = {
        articles: result
      }
      res.end(JSON.stringify(shapeResult));
    })
  })
};
