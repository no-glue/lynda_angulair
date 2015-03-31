var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var airports = require('./data/airports.json');
var flights = require('./data/flights.json');
var reservations = [];

for (var i = 0; i < flights.length; i++) {
  flights[i].originFullName = airports[flights[i].origin].name;
  flights[i].destinationFullName = airports[flights[i].destination].name;
}

function getMatchingFlights (data) {
  return flights.filter(function  (item) {
    return (item.origin === data.origin) &&
      (item.destination === data.destination);
  });
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/airports', function  (req, res) {
  res.json(airports);
});

app.get('/airports/:airport', function (req, res) {
  if (typeof airports[req.params.airport] === 'undefined') {
    res.json(404, {status: 'not found - invalid airport code'});
  } else {
    res.json(airports[req.params.airport]);
  }
});

app.get('/flights', function (req, res) {
  res.json(flights);
});

app.get('/flights/:origin', function (req, res) {
  var with_origin = flights.filter(function  (item) {
    return item.origin === req.params.origin;
  });

  res.json(with_origin);
});

app.get('/flights/:origin/:destination', function (req, res) {
  var matches = getMatchingFlights(req.params);

  res.json(matches);
});

app.get('/reservations', function  (req, res) {
  res.json(reservations);
});

app.post('/reservations', function  (req, res) {
  var matches = getMatchingFlights(req.body);

  if (matches.length) {
    reservations.push(matches[0]);
    res.json(matches[0]);
  } else {
    res.status(404).end();
  }
});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
