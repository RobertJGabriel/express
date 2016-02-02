console.log("Setup Complete");

var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    request = require('request')


var app = express();
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib());
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Home'
    })
})

app.get('/nightsout', function (req, res) {
    res.render('nightsout', {
        title: 'Home'
    })
})

app.get('/idea', function (req, res) {
    res.render('idea', {
        title: 'Home'
    })
})

app.get('/companylayout', function (req, res) {
    res.render('companyLayout', {
        title: 'Home'
    })
})


app.get('/swag', function (req, res) {
    res.render('swag', {
        title: 'Goodies'
    })
})

app.get('/manageHolidays', function (req, res) {
    res.render('holidayForm', {
        title: 'Holiday Request'
    })
})

app.get('/test', function (req, res) {
    res.render('test', {
        title: 'batman'
    })
})

app.post('/test', function (req, res) {
    app.username = req.body.username;
    app.password = req.body.password;
})


app.get('/internship', function (req, res) {
    res.render('internship', {
        title: 'batman'
    })
})


app.get('/userDetails', function (req, res) {
    console.log(app);
    var url = 'https://' + app.username + ':' + app.password + '@digitalcrew.teamwork.com/me.json';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var response = JSON.parse(body);
            app.account = response

        } else {
            console.log("Got an error: ", error, ", status code: ", response.statusCode);
        }
    });
})

app.listen(8081, '0.0.0.0')
