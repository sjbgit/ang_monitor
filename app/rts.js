module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    app.post('/api/data', function(req, res) {

        console.log('request: ' + req.body.title);


        req.body.title = req.body.title + ' xxx';


        res.json(req.body);

    });

};