var express=require('express')
var app=express()
app.set('views', './app/views/pages')
app.set('view engine', 'jade')
require('./config/routes')(app)
//app.get('/',function(req,res){
	//res.render('index')
	//console.log('test')
//})
 app.listen(3000)
 