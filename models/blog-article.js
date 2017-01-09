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
    type: String,
    required: true
  },
  publishedAt: {
    type: Date,
    required: true
  }
});

exports.BlogArticle = mongoose.model('BlogArticle', BlogArticleSchema);
