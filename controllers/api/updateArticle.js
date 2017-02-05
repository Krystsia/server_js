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

      BlogArticle.update({_id: req.body.articleId},
        {$set: {
            content: req.body.content,
            title: req.body.title,
            urlToImage: './images/' + image.name
          }
        }, (err, blogArticle, affected) => {
        if(err) throw err;

        res.send('OK');
      });
    });
  } else {

    BlogArticle.update({_id: req.body.articleId},
      {$set: {
          content: req.body.content,
          title: req.body.title,
        }
      }, (err, blogArticle, affected) => {
      if(err) throw err;

      res.render('OK');
    });
  }
};
