var express= require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Welcome to my third http server!!');
});

// Route with Params
app.get('/books/:user/comics/:comicHero',function(req, res){
    console.log(req.params);
    var username = req.params.user;
    var comichero = req.param.comicHero;
    res.send(req.params);
});

app.use(function(req, res, next){
    res.status(404).send('URL aint defiend.!!');
});

app.listen(3200, function(){
    console.log('Your app is running on 3200');
});