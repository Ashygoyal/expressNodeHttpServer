var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.listen(3600, function(){
    console.log('Your app is now running on port 3600');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Send HTML file on get

app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.send('<b>Congrats</b>');
  res.end("yes");
});

app.use(function(req, res, next){
    res.status(404).send("Sorry, that route doesnt exist!");
});



