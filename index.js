//import {getcookies} from 'submitted';
var express = require('express');
var pug = require('pug');
var path = require('path');
var config = require('./menu');
var fs = require('fs');
var app = express();
app.set('view engine', 'pug');
app.set('views', __dirname+'/views');
app.use(express.static(path.join(__dirname+'/public')));
//var cookies = {getcookies};

app.get('/', function(req,res){
    res.render('home', {
        "title": "Home",
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
        "title": "Orders",
        "config":config
    })
});
app.post('/submitted', function(req,res){
    res.render('submitted', {
        // function(){
        //     fs.appendFile('ordersText.txt', cookies, function (err){
        //         if (err)
        //           throw err;
        //     })
        // }
    })
});
app.listen(3000);
