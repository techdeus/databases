var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "chat"
});


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

con.connect(err => {
  if (err) {
    throw err;
  }
  console.log('connected to mysql!');
});

exports.con = con;