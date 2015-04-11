var mongoose = require('mongoose')
var CategorySchema = new mongoose.Schema({
  name: String,
  sort: Number,
  summary:String
})
mongoose.model('Category', CategorySchema)
