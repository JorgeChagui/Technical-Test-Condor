var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var providersRouter = require('./routes/providers');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Start Mongoose
require('./mongoose');

// use routers
app.use('/providers', providersRouter);

module.exports = app;
