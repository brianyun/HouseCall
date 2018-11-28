'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'changbae',
    password : 'bcb225',
    database : 'HOUSECALL'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;