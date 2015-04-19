var models = require('../models')
var Category = models.Category


exports.add=function(req,res){
	var _category=req.body.category
	var category=new Category(_category)
	console.log(category);
	category.save(function(err){
		if(err){
			console.log(err)
		}
		res.redirect('../admin/category')
	})
}
exports.get=function(req,res){

	Category.find(function(err,categories){
		if(err){
			console.log(err)
		}
		res.render('./admin/category',{
			categories:categories
		})
	})
}

exports.remove=function(req,res){
	var id=req.params.id
	if(id){
		Category.remove({_id:id},function(err,categorys){
		if(err){
			console.log(err)
		}
			res.redirect('../../admin/category')
		})
	}
}