var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId	

var CommentSchema = new Schema({
  	article:{Types:ObjectId,ref:{'article'}}
  	content: String,
 	meta:{
 		addTime:{
 			type:Date,
 			default:Date.Now()
 	}
 }
})

module.exports = CommentSchema