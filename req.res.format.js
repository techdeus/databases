// get req /messages
fetch(
  "http://parse.sfm6.hackreactor.com/chatterbox/classes/messages?order=-createdAt", 
  {"credentials":"omit","headers":{},
  "referrerPolicy":"no-referrer-when-downgrade",
  "body":null,
  "method":"GET",
  "mode":"cors"
});

// response
{
   "results":[
      {
         "objectId":"dDx204VGzQ",
         "username":"Marlon",
         "roomname":"holla back gurl",
         "text":"hey",
         "createdAt":"2018-10-10T23:57:39.940Z",
         "updatedAt":"2018-10-10T23:57:39.940Z"
      },
      {
         "objectId":"qd4eANPUZ2",
         "username":"123",
         "roomname":"holla back gurl",
         "text":"msg121",
         "createdAt":"2018-10-10T23:19:26.691Z",
         "updatedAt":"2018-10-10T23:19:26.691Z"
      },
   ]
}


// POST req /messages
fetch(
  "http://parse.sfm6.hackreactor.com/chatterbox/classes/messages", 
  {"credentials":"omit",
  "headers":{},
  "referrerPolicy":"no-referrer-when-downgrade",
  "body":"{\"username\":\"Marlon\",\"text\":\"hi from chatterbox\",\"roomname\":\"lobby\"}",
  "method":"POST",
  "mode":"cors"
});

// response
{"objectId":"CI6pWabSpi","createdAt":"2018-10-11T19:22:50.249Z"}