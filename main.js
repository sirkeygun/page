var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page


app.listen(8080);
console.log('Server is listening on port 8080');
