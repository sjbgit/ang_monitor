/**
 * Created by sbunke on 2/12/2015.
 */
var router = require('express').Router()

router.post('/api/testmon', function (req, res, next) {
    console.log('request from testmon: ' + req.body.title);


    req.body.title = req.body.title + ' xxx';


    res.json(req.body);
});
