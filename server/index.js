const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session middleware:
app.use(
  session({
    secret: 'This is not a very secure secret...',
    resave: false,
    saveUninitialized: false
  })
);

app.use(express.static(path.join(__dirname, '../public')));

app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
