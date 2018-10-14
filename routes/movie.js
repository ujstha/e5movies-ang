var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');

/* GET ALL MOVIES */
router.get('/', function(req, res, next) {
  Movie.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});


