const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = global.Promise;

mongoose.connect(config.get('mongoose:uri'));

const BlogArticleSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  publishedAt: {
    type: Date,
    required: true
  },
  urlToImage: {
    type: String
  }
});

exports.BlogArticle = mongoose.model('BlogArticle', BlogArticleSchema);
