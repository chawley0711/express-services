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
var cookieparser = require('cookie-parser');
app.use(cookieparser('haircut'));
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
//var cookies = {getcookies};

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
        "title": "Orders",
        "config":config
    })
});
app.post('/submitted',urlencodedParser, function(req,res){
        var cookies = req.cookies.order;
        var string = cookies + ", " + req.body.name + ", " + req.body.address + ", " + req.body.phone + '\n \r';
        fs.appendFile('ordersText.txt', string, function (err){
            if (err)
              throw err;
        })
    res.render("submitted");
});
app.listen(3000);
