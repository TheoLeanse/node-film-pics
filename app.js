var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret1234',
  resave: false,
  saveUninitialized: false
}));

app.get('/', function(req, res) {
  req.session.name = "Theo";
  res.render('index');
});

app.post('/savefilm', function(req, res) {
  req.session.film = req.body.film;
  req.session.save();
});

app.get('/getfilm', function(req, res) {
  res.json({ film: req.session.film });
});

var server = app.listen(3000, function() {
  console.log('da server is running on port 3000!');
});
