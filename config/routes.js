var controller=require('../app/controllers')
var User=controller.User
var Category=controller.Category
var Article=controller.Article
var Img=controller.Img
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index')
		console.log('test')
	})


	app.get('/admin/',User.index)
	app.get('/admin/index',User.index)


	app.get('/admin/cate/:cateId/:page',Article.get)

	//管理员
	app.get('/admin/account', function(req, res) {
		res.render('admin/account')
		console.log('test')
	})
	app.get('/admin/reg',User.signup)
	app.post('/admin/account',User.signin)

	//发布文章
	app.get('/admin/article',Article.index)
	app.post('/admin/article',Img.save,Article.add)

	//分类路由
	app.get('/admin/category',Category.get)
	app.post('/admin/category',Category.add)
	app.get('/admin/category/:id',Category.remove)

	//项目列表
	app.get('/projectlist', function(req, res) {
		res.render('projectlist')
		console.log('test')
	})

	//文章
	app.get('/article', function(req, res) {
		res.render('article')
		console.log('test')
	})
}