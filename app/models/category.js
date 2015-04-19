var mongoose = require('mongoose')
var ObjectId=mongoose.Schema.Types.ObjectId	

var CategorySchema = new mongoose.Schema({
  name: String,
  sort: Number,
  summary:String,
  article: [{type: ObjectId, ref: 'Article'}]
})
mongoose.model('Category', CategorySchema)
