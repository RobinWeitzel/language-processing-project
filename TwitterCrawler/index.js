var Twitter = require('twitter');
var mysql = require('mysql');
var emojiStrip = require('emoji-strip')
 
// Fill in this info with the data for your Twitter account
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

// Fill this in with the data for your mysql server
var pool  = mysql.createPool({
    host: "",
    user: "",
    password: ""
  });
 
var stream = client.stream('statuses/sample', {language: 'en'});
stream.on('data', function(event) {
    if(event.entities.media !== undefined && event.possibly_sensitive === false) {
        for(let media of event.entities.media) {
            if(media.type === 'photo') {
                pool.getConnection(function(err, connection) {
                    if(err) { 
                      console.log(err); 
                      return; 
                    }
                    var sql = "insert into twitter.tweets (content, url) values (?, ?);";
                    connection.query(sql, [emojiStrip(event.text), media.media_url_https], function(err, results) {
                      connection.release(); // always put connection back in pool after last query
                      if(err) { 
                        console.log(err); 
                        return; 
                      }
                    });
                  });
                break;
            } 
        }
    }
  
});
 
stream.on('error', function(error) {
  throw error;
});