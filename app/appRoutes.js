/**
 * Created by sbunke on 2/4/2015.
 */
module.exports = function(app) {

    app.post('/api/data', function(req, res) {

        console.log('request: ' + req.body.title);


        req.body.title = req.body.title + ' xxx';


        res.json(req.body);

    });


};