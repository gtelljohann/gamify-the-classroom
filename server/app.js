var express = require('express');
var app = express();

app.use('/api', require('./api'));

app.use('/bears', function(req, res, next) {
  console.log('hello world!');
  res.send('hello world')
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json(err);
});

app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(9001, function() {
  var host = server.address().address;
  var port = server.address().port;


})



