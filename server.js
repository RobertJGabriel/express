console.log("Setup Complete");

var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    request = require('request');


var app = express();
    app.use(express.json()); // to support JSON-encoded bodies
    app.use(express.urlencoded());
    app.set('views', __dirname + '/views')
    app.set('view engine', 'jade')
    app.use(express.logger('dev'))
    
function compile(str, path) {
    return stylus(str).set('filename', path).use(nib());
}

app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))


app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
    var url =
        "https://account.xbox.com/en-us/gameclips/loadByUser?gamerTag=";
    var gamerTag = "";
    req.query['gamerTag'] ? gamerTag = req.query['gamerTag'] : gamerTag ="E";
    console.log(gamerTag);
    request(url + gamerTag, function (err, response, body) {
        var dataGram = JSON.parse(body);
        res.render('index', {
            title: 'Home',
            data: dataGram
        })
    });
})


app.get('/about', function (req, res) {
    res.render('about', {
        title: 'about'
    })
})

app.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'contact'
    })
})

app.listen(8081, '0.0.0.0')
