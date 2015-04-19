var models = require('../models')
var Article = models.Article
var Category = models.Category

exports.add = function(req,res) {
	var _article = req.body.article
	var obj = new Article(_article);
	console.log(obj);
	obj.save(function(err, article) {
		if (err) {
			console.log(err)
		}
		console.log(obj);
		res.redirect('../../admin/article')
	})
}

exports.index=function(req,res){
	 Category.find(function(err,categories){
      console.log(categories)
      res.render('./admin/article',{
        categories:categories
      })
    })
}

exports.get = function(req,res) {
	var _cateId = req.params.cateId
	var page = parseInt(req.params.page, 10) || 1
	var pageCount = 10
	var index = (page - 1) * pageCount
	console.log(_cateId)
	console.log(page)
	Category.findOne({
		_id: _cateId
	}).populate('article').exec(function(err, categories) {
				res.json({
					articles:categories.article.slice(index,pageCount)
				})
		})
}