const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soft_chaos_1'

});
connect.connect((err) => {
    if (err) {
        console.warn("error in connection")
    }
    else {
        console.warn("connected")
    }
});

module.exports = connect;
