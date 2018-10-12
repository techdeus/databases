var models = require('../models');
var _ = require('underscore');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (result) => {
        var responseBody = {results: []};
        for (var i = 0; i < result.length; i++) {
          var message = {
            objectId: result[i].id,
            text: _.unescape(result[i].text),
            roomname: result[i].roomname,
            createdAt: result[i].createdAt,
            username: _.unescape(result[i].username)
          };
          responseBody.results.push(message); 
        }
        
        res.json(responseBody);
      });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // get the username passed from client
      var username = req.body.username;
      var text = _.escape(req.body.text);
      var roomname = req.body.roomname;
      var createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
      var user_id;
      
      // call the models.users.get method to check if user exists 
      models.users.get(username, (result) => {
        // if user doesn't exist
        if (result.length === 0) {
          // insert the user into the database using models.users.post
          models.users.post(username, (result) => {
            user_id = result.insertId;
            // insert message into the messages table using models.messages.post
            models.messages.post(text, roomname, createdAt, user_id, (result) => {
              var message = {
                objectId : result.insertId,
                createdAt : createdAt
              };
              res.json(message);
            });  
          });
        } else {
          // a function which handles posting a message to the database
          user_id = result[0].id;
          models.messages.post(text, roomname, createdAt, user_id, (result) => {
            var message = {
              objectId : result.insertId,
              createdAt : createdAt
            };
            res.json(message);
          });
        }
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      
    },
    
    post: function (req, res) {}
  
  }
};

