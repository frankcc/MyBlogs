var mongoose = require('mongoose')
//var ObjectId = Schema.Types.ObjectId

var ChatSchema = new mongoose.Schema({
		content: String
})

mongoose.model('Chat', ChatSchema)
