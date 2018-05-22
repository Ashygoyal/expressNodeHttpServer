var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('<b> My Second Express HTTP Server');
});



// Handling Routes and Request Methods

// Add a Route
app.route('/avengers')
.get(function(req, res){
    res.send('Get the Avengers!');
})
.post(function(req, res){
    res.send('Send the Avengers!');
})
.put(function(req, res){
    res.send('Update Awaiting!');
})


// Using wildcard for route
app.get('/the*man', function(req, res){
    res.send('the*man');
});

// using regex in routes
app.get(/super/, function(req, res, ){
    res.send('I see your URL has super in it!');
});

app.use(function(req, res, next){
    res.status(404).send('No superhero at this URL');
});

app.listen(3100, function(){
    console.log('Your app is now running on port 3100');
});