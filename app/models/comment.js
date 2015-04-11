var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId
var CommentSchema = new mongoose.Schema({
	content: String,
	meta: {
		addTime: {
			type: Date,
			default: Date.now()
		}
	}
})

mongoose.model('Comment', CommentSchema)
