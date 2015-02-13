/**
 * Created by sbunke on 2/12/2015.
 */


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

    app.get('/api/monitor/count', function (req, res) {


        var query = 'SELECT count(*) as count FROM [dbo].[PulseAggregates]';

        var request = connection.request();

        request.query(query , function(err, recordset) {
            // ... error checks

            //console.dir(recordset);
            res.json(recordset);
        });


    });

    app.get('/api/monitor/toplogrecs', function (req, res) {

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

};









/*
var router = require('express').Router()

router.post('/api/testmon', function (req, res, next) {
    console.log('request from testmon: ' + req.body.title);


    req.body.title = req.body.title + ' xxx';


    res.json(req.body);
});
*/
/*
exports.findAll = function(req, res) {
    console.log('request from testmon: ' + req.body.title);
    req.body.title = req.body.title + ' xxx';
    res.json(req.body);
};
*/
