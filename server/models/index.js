var db = require('../db');
var con = db.con;


module.exports = {
  messages: {
    get: function (callback) {
      con.query('SELECT * FROM messages, users WHERE messages.user_id = users.id;', function (err, result, fields) {
        if (err) {
          throw err;
        } else {
          console.log("Result: " + result);
          console.log("Fields: " + fields);
        }
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (text, roomname, createdAt, user_id, callback) {
      con.query(`INSERT INTO messages (text, roomname, createdAt, user_id) VALUES ('${text}', '${roomname}', '${createdAt}', ${user_id});`, function(err, result, fields) {
        if (err) {
          throw err;
        } else {
          console.log("Results: ", result);
          callback(result);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username, callback) {
      con.query(`SELECT * FROM users WHERE username = '${username}';`, function(err, result, fields) {
        if (err) {
          throw err;
        } else {
          console.log("Results: ", result);
          callback(result);
        }
      });
    },
    post: function (username, callback) {
      con.query(`INSERT INTO users (username) VALUES ('${username}');`, function(err, result, fields) {
        if (err) {
          throw err;
        } else {
          console.log("Results: ", result);
          callback(result);
        }
      });
    }
  }
};

