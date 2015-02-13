var sql = require('mssql');

var config = {
	user: 'bingpulse@cxgkje8oaa',
	password: 'PuL$3#P@$$#',
	server: 'cxgkje8oaa.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
	database: 'bingpulseci',

	options: {
		encrypt: true // Use this if you're on Windows Azure
	}
};

var countQuery = 'SELECT count(*) as count FROM [dbo].[PulseAggregates]';

var connection = new sql.Connection(config, function(err) {
	// ... error checks
	console.log(err);
	// Query



	var request = new sql.Request(connection); // or: var request = connection.request();

	/*
	 request.query(query , function(err, recordset) {
	 // ... error checks

	 console.dir(recordset);
	 });
	 */

});

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


	app.get('/api/monitor', function (req, res) {


		var query = 'SELECT count(*) as count FROM [dbo].[PulseAggregates]';

		var request = connection.request();

		request.query(query , function(err, recordset) {
			// ... error checks

			//console.dir(recordset);
			res.json(recordset);
		});


	});

	app.get('/api/monitor/toplogs', function (req, res) {

		var query = 'SELECT top 100 [Id], [Date],[Thread],[Level],[Logger],[Message],[Exception] FROM [dbo].[Logs] order by id desc';

		var connection = new sql.Connection(config, function(err) {
			// ... error checks
			console.log('in conn error');
			console.log(err);
		});

		var request = connection.request();

		request.query(query , function(err, recordset) {
			// ... error checks

			//console.dir(recordset);
			res.json(recordset);
		});
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

	app.post('/api/data', function(req, res) {

		console.log('request: ' + req.body.title);


		req.body.title = req.body.title + ' xxx';


		res.json(req.body);

	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};