const mysql = require('mysql');
const db_config = require('../config/db_config.js');

// Create a connection to the database
const connection = mysql.createConnection({
    host: db_config.HOST,
    user: db_config.USER,
    password: db_config.PASSWORD,
    database: db_config.DB
});

// open the connection --> TODO: Be careful to close connection somehow
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to MySQL database")
});

module.exports = connection;