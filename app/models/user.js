var mongoose = require('mongoose')
//var bcrypt = require('bcrypt')
var Salt='frankcc'
var UserSchema = new mongoose.Schema({
  num:{
  	unique:true,
  	type:String
  },
  name: String,
  password: String,
  meta: {
    addTime: {
      type: Date,
      default: Date.now()
    }
  }
})

/*UserSchema.pre('save', function(next) {
  var user = this
  this.meta.addTime =  Date.now()
  bcrypt.genSalt(Salt, function(err, salt) {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err)

      user.password = hash
      next()
    })
  })
})
UserSchema.methods = {
  validatePassword: function(_password, cb) {
    bcrypt.compare(_password, this.password, function(err, isMatch) {
      if (err) return cb(err)

      cb(null, isMatch)
    })
  }
}
*/
mongoose.model('User', UserSchema)

