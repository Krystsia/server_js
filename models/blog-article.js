const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = global.Promise;

mongoose.connect(config.get('mongoose:uri'));

const BlogArticleSchema = mongoose.Schema({
  username: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    //required: true
  },
  url: {
    type: String
  },
  publishedAt: {
    type: Date
  },
  urlToImage: {
    type: String,
    // required: true
  }
});

exports.BlogArticle = mongoose.model('BlogArticle', BlogArticleSchema);
