var express = require('express');
var pug = require('pug');
var path = require('path');
var config = require('./menu');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));

app.get('/', function(req,res){
    res.render('home', {
        "title": "The Best Barbershop",
        "name": "The Best Barbershop",
        "city": "New Mexico"
    })
});

app.get('/services', function(req,res){
    res.render('services',{
        "title": "Services",
        "config":config
    })
});

app.get('/orders', function(req,res){
    res.render('orders', {
        "title": "Orders"
    })
});

app.listen(3000);
