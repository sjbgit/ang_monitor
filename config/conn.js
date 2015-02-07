/**
 * Created by sbunke on 2/5/2015.
 */
var mongoose = require('mongoose');

var connection = 'mongodb://test:test@ds029837.mongolab.com:29837/multivision'

mongoose.connect(connection, function () {
    console.log('mongodb connected')
})
module.exports = mongoose;