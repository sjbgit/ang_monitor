/**
 * Created by sbunke on 2/13/2015.
 */
module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
/*
    app.get('/api/posts', function (req, res) {
        res.json([
            {
                username: 'test',
                body: 'hey!'
            }
        ]);
    });
*/
    app.get('/api/user', function (req, res) {

        //console.log('user body:' + req.body);
        console.log('in /api/user');

        res.json([
            {
                name: 'test name',
                email: 'test email'
            }
        ]);



    });

    app.post('/api/user', function (req, res) {

        console.log('user body:' + req.body);
        console.log('in /api/user');

        res.json([
            {
                name: req.body.name + 'test name',
                email: req.body.email + 'test email'
            }
        ]);



    });

};