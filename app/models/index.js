var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/test'
mongoose.connect(dbUrl, function (err) {
  if (err) {
    console.error('connect to %s error: ', dbUrl, err.message);
    process.exit(1);
  }
});

// models
require('./article');
require('./category');
require('./chat');
require('./comment');
require('./user');

exports.User = mongoose.model('Article');
exports.Category = mongoose.model('Category');
exports.Chat = mongoose.model('Chat');
exports.Comments = mongoose.model('Comment');
exports.User = mongoose.model('User');
