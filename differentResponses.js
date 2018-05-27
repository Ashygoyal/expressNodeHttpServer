var express= require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Welcome to my third http server!!');
});

// Displaying a JSON
app.get('/json', function(req, res){
    res.json({
        'fname':'Clark',
        'lname':'Kent'
    });
});

// Downloading a file on visiting the URL
app.get('/download', function(req, res){
    res.download('D:/POC/testing.txt');
});

// Redirecting to a new URL
app.get('/redirect', function(req, res){
    res.redirect('http://www.ashishgoyal.in');
});

// Other responses
app.get('/buffer', function(req, res){
    res.send(new Buffer('whoop'));
});

app.get('/somejson', function(req, res){
    res.send({ some: 'json' });
});

// Sending HTML code
app.get('/html', function(req, res){
    res.send('<p>some html</p>');
});

// Displaying error on error codes
app.get('/error', function(req, res){
    res.status(500).send({ error: 'something blew up' });
});

app.use(function(req, res, next){
    res.status(404).send('URL aint defiend.!!');
    res.header('Content-Type', 'application/json');
    next();
});

app.listen(3300, function(){
    console.log('Your app is running on 3300');
});