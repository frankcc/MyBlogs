var express=require('express')
var app=express()
var mongoose = require('mongoose')
var session  = require(express-session)
var mongoStore = require('connect-mongo')(session)
var fs = require('fs')
var path = require('path')
var port = process.env.PORT || 3000
var dbUrl = 'mongodb://localhost/frankcc'

app.set('views', './app/views/pages')
app.set('view engine', 'jade')

app.use(express.bodyParser())
app.use(express.cookieParser())
app.use(express.multipart())

//mongoose connect
mongoose.connect(dbUrl)
// models loading
var models_path = __dirname + '/app/models'
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file
      var stat = fs.statSync(newPath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      }
      else if (stat.isDirectory()) {
        walk(newPath)
      }
    })
}
walk(models_path)


app.use(express.session({
  secret: 'myblogs',
  store: new mongoStore({
    url: dbUrl,
    collection: 'sessions'
  })
}))

require('./config/routes')(app)

 app.listen(port)

app.locals.moment = require('moment')
 app.use(express.static(path.join(__dirname, 'public')))
 console.log('start '+port+' success')
 