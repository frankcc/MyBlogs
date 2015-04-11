var express = require('express')
var app = express()
var session = require('express-session')
var mongoStore = require('connect-mongo')(session)
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
//var multipart=require('multipart')
var fs = require('fs')
var path = require('path')
var port = process.env.PORT || 3000
var dbUrl = 'mongodb://localhost/test'

app.set('views', './app/views/pages')
app.set('view engine', 'jade')
app.use(bodyParser())
app.use(cookieParser())
//app.use(multipart())

//mongoose connect
//mongoose.connect(dbUrl)
// models loading
require('./app/models');


app.use(session({
  secret: 'test',
  store: new mongoStore({
    url: dbUrl,
    collection: 'sessions'
  })
}))

require('./config/routes')(app)

app.listen(port)

//app.locals.moment = require('moment')
app.use(express.static(path.join(__dirname, 'public')))
console.log('start ' + port + ' success')