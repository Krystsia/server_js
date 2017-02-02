const BlogArticle = require('../../models/blog-article').BlogArticle;
const fs = require('fs');
const pwd = process.env.PWD;
const path = require('path');
const imageStore = path.join(pwd, 'public/images');


module.exports = (req, res, next) => {
console.log(req.body);
  const image = req.files.image ? req.files.image : req.files.file;
  if(req.files) {
    fs.writeFile(path.join(imageStore, image.name), image.data, (err) => {
      if (err) throw err;

      let blogArticle = new BlogArticle({
        username: "Kirill",
        title: req.body.title,
        content: req.body.content,
        url: "#",
        publishedAt: new Date().toString(),
        urlToImage: './images/' + image.name
      })

      blogArticle.save((err, blogArticle, affected) => {
        if(err) throw err;

        BlogArticle.findOne({title: req.body.title}, (err, result) => {
          let shapeResult = {
            articles: result
          }
          res.json(shapeResult);
        })
      });
    });
  } else {
    let blogArticle = new BlogArticle({
      username: "Kirill",
      title: req.body.title,
      description: req.body.content,
      url: "#",
      publishedAt: new Date().toString(),
      urlToImage: "#"
    })

    blogArticle.save((err, blogArticle, affected) => {
      if(err) throw err;

      BlogArticle.findOne({title: req.body.title}, (err, result) => {
        let shapeResult = {
          articles: result
        }
        res.json(shapeResult);
      })
    });
  }
};
