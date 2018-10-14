var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  title: String,
  cast: String,
  genre: String,
  storyline: String,
  release_date: String,
  director: String,
  movie_poster: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Movie', MovieSchema);
