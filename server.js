var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var multer = require('multer');
var fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://e5movies:e5movies@ds127293.mlab.com:27293/e5moviesdb', { useNewUrlParser: true })
  .then(() =>  console.log('Connection Succesful..... Visit localhost:3000'))
  .catch((err) => console.error(err));

var apiRouter = require('./routes/movie');

var DIR = './uploads/';

var upload = multer({dest: DIR});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/e5movies')));
app.use('/movies', express.static(path.join(__dirname, 'dist/e5movies')));
app.use('/movie-details/:id', express.static(path.join(__dirname, 'dist/e5movies')));
app.use('/movie-create', express.static(path.join(__dirname, 'dist/e5movies')));
app.use('/movie-edit/:id', express.static(path.join(__dirname, 'dist/e5movies')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://valor-software.github.io');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/api', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
 
    res.end('File is uploaded');
  });
});

module.exports = app;
