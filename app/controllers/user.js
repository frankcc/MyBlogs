var models = require('../models');
var User = models.User;
var Category=models.Category
exports.index=function(req,res){
    Category.find(function(err,categories){
      console.log(categories)
      res.render('./admin/index',{
        categories:categories
      })
    })
}

exports.signup = function(req, res) {
  console.log('signup')
  //var _user = {'num':'admin','name':'frankcc','password':'123456'}
 

      var user = new User()
      user.num='admin'
      user.name='frankcc'
      user.password='123456'
      console.log(user)
      user.save(function(err, user) {
        if (err) {
          console.log(err)
        }

        console.log('注册成功')
          res.redirect('./account')
        //res.redirect('/')
      })
    
}

// signin
exports.signin = function(req, res) {
  
  var num = req.body.num
  var password = req.body.password

  User.findOne({'num': num}, function(err, user) {
    if (err) {
      console.log(err)
    }

    if (!user) {
      return res.redirect('/admin/account')
    }

    user.validatePassword(password, function(err, isMatch) {
      if (err) {
        console.log(err)
      }

      if (isMatch) {
        console.log('登陆成功')
        req.session.user = user

        return res.redirect('../admin/')
      }
      else {
        return res.redirect('../admin/account')
      }
    })
  })
}

// logout
exports.logout =  function(req, res) {
  delete req.session.user
  //delete app.locals.user

  res.redirect('/')
}

// userlist page
exports.list = function(req, res) {
  User.fetch(function(err, users) {
    if (err) {
      console.log(err)
    }

    res.render('userlist', {
      title: 'imooc 用户列表页',
      users: users
    })
  })
}

// midware for user
exports.signinRequired = function(req, res, next) {
  var user = req.session.user

  if (!user) {
    return res.redirect('/signin')
  }

  next()
}

exports.adminRequired = function(req, res, next) {
  var user = req.session.user

  if (user.role <= 10) {
    return res.redirect('/signin')
  }

  next()
}