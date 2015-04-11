module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index')
		console.log('test')
	})
	app.get('/admin/', function(req, res) {
		res.render('admin/index')
		console.log('test')
	})
	app.get('/admin/account', function(req, res) {
		res.render('admin/account')
		console.log('test')
	})
	app.get('/admin/article', function(req, res) {
		res.render('admin/article')
		console.log('test')
	})
}