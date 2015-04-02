var mongoose = require('mongoose')

var CategorySchema = new mongoose.Schema({
  
  name: String,
  sort: Number,
  summary:String
})

module.exports = CategorySchema