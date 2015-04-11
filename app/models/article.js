var mongoose = require('mongoose')

var ObjectId = mongoose.Schema.Types.ObjectId	


var ArticleSchema = new mongoose.Schema({
  title: String,
  content:String,
  foucsImg:String,
  _id:ObjectId,
  comment:[{type:ObjectId,ref:'Comment'}],
  category: [{
      type: ObjectId, 
      ref: 'Category'
  }],
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    },
    updateUser: {
      type: ObjectId,
      ref: 'User'
    },
     AddUser: {
      type: ObjectId,
      ref: 'User'
    }
  }
})

ArticleSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }

  next()
})

ArticleSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('meta.updateAt')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  }
}
mongoose.model('Article', ArticleSchema)
