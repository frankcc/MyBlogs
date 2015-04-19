var mongoose = require('mongoose')
var dbUrl = 'mongodb://localhost/test'
mongoose.connect(dbUrl, function (err) {
  if (err) {
    console.error('connect to %s error: ', dbUrl, err.message);
    process.exit(1);
  }
  console.log('mongodb成功')
});

// models
require('./article');
require('./category');
require('./chat');
require('./comment');
require('./user');

exports.Article = mongoose.model('Article');
exports.Category = mongoose.model('Category');
exports.Chat = mongoose.model('Chat');
exports.Comment = mongoose.model('Comment');
exports.User = mongoose.model('User');
