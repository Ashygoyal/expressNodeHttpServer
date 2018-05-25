var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<b> My first Express HTTP Server');
});

app.get('/Welcome', function(req, res){
    res.send('<b> Welcome </b> to my HTTP server!!');
});

app.use(function(req, res, next){
    res.status(404).send("Sorry, that route doesnt exist!");
});

app.listen(3000, function(){
    console.log('Your app is now running on port 3000');
});

