const mysql = require('mysql');
const { router } = require('./app');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soft_chaos_1'

});
con.connect((err) => {
    if (err) {
        console.warn("error in connection")
    }
    else {
        console.warn("connected")
    }
});


module.exports = con;

