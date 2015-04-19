var fs = require('fs')
var path = require('path')
exports.save = function(req, res, next) {
	var img = req.files.foucsImg
	console.log(img)
	var filePath = img.path
	var originalFilename = img.originalFilename

	if (originalFilename) {
		fs.readFile(filePath, function(err, data) {
			var timestamp = Date.now()
			var type = img.type.split('/')[1]
			var poster = timestamp + '.' + type
			var newPath = path.join(__dirname, '../../', '/public/upload/' + poster)

			fs.writeFile(newPath, data, function(err) {
				req.foucsImg = poster
				next()
			})
		})
	} else {
		next()
	}
}