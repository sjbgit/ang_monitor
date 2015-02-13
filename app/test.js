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



    app.get('/api/user/:id', function (req, res) {

        console.log('user body:' + req.body.user);
        console.log('in /api/user - get WITH THE ID PASSED IN');

        var id = req.params.id;
        console.log('logged id: ' + id);

        res.json(
            {
                name: 'test name - from get WITH ID',
                email: 'test email - from get WITH ID'
            }
        );



    });

    app.get('/api/user', function (req, res) {

        console.log('user body:' + req.body.user);
        console.log('in /api/user - get WITHOUT THE ID');

        var id = req.params.id;
        console.log('logged id: ' + id);

        res.json([
            {
                name: 'test name - from get',
                email: 'test email - from get'
            }
        ]);



    });


    app.post('/api/user', function (req, res) {

        console.log('user body:' + req.body);
        console.log('in /api/user - post');

        res.json([
            {
                name: req.body.name + 'test name',
                email: req.body.email + 'test email'
            }
        ]);



    });

    app.put('/api/user', function (req, res) {

        console.log('user body:' + req.body);
        console.log('in /api/user put');

        res.json([
            {
                name: req.body.name + 'test name - PUT',
                email: req.body.email + 'test email - PUT'
            }
        ]);



    });

};