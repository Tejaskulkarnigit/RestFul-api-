const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soft_chaos_1'

});
conn.connect((err) => {
    if (err) {
        console.warn("error in connection")
    }
});

module.exports = conn;





