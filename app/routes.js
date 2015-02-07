module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	var Post = require('./models/post');

	app.get('/api/posts', function (req, res) {
		res.json([
			{
				username: 'test',
				body: 'hey!'
			}
		]);
	});

	app.post('/api/posts', function (req, res, next) {
		var post = new Post({
			username: req.body.username,
			body: req.body.body
		})
		post.save(function (err, post) {
			if (err) { return next(err) }
			res.json(201, post)
		})
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};