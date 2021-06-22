//NOTE: mysql package to connect to sql database
const mysql = require('mysql2');

//NOTE:GOOGLE: pool here allows us to run multiple queries without closing the connection
const pool = mysql.createPool({
    //NOTE: local machine uses localhost here
    host: 'localhost',
    //NOTE: user default is root during our configration
    user: 'root',
    database: 'notail_node',
    password: 'HXHwyw2012'
});

//NOTE: GOOGLE: this will allow us to use promise when working with the connections
module.exports = pool.promise();