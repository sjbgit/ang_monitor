module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    console.log('in rts');

    app.post('/api/datarts', function(req, res) {

        console.log('request: ' + req.body.title);


        req.body.title = req.body.title + ' xxx';


        res.json(req.body);

    });

    app.get('/api/rts', function(req, res) {

        console.log('this is in rtsrequest: ' + req.body.title);


        req.body.title = req.body.title + ' xxx - in rts';


        res.json(req.body);

    });

};