var db = require('../db');
var con = db.con;

var sql = 'select * from messages';

module.exports = {
  messages: {
    get: function (callback) {
      con.query(sql, function (err, result, fields) {
        if (err) {
          throw err;
        } else {
          console.log("Result: " + result);
        }
        // callback();
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

