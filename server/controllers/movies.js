const Movie = require('../models/movies');

exports.getMovies = function(req, res) {
  Movie.find({})
        .populate('author')
        .populate('category')
        .exec((errors, movies) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(movies);
  });
}


exports.getMovieByID = function(req, res) {
  const autorID = req.params.id;
  Movie.findById(autorID,{})
      .populate('author')
      .populate('category')
        .exec((errors, authors) => {

    if (errors) {
      return res.status(422).send({errors});
    }

    return res.json(authors);
  });
}
