var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var fs = require('fs'); // module for writing into file

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

	var custom = {
	user_name : req.body.user,
	password : req.body.password	
	};

  //var user_name=req.body.user;
  //var password=req.body.password;
  
  var filePath = 'demo.json';
  console.log("User name = "+user_name+", password is "+password);

// Writing parameters in a file
    fs.appendFile(filePath, JSON.stringify(custom), function() {
    	//if (err) throw err;
    	res.sendStatus(200)
      	res.end();
    });


  });

app.use(function(req, res, next){
    res.status(404).send("Sorry, that route doesnt exist!");
});
