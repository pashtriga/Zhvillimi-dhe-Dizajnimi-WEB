const express = require('express');
const router = express.Router();

const MoviesCtrl = require('../controllers/movies');

router.get('', MoviesCtrl.getMovies);

router.get('/:id', MoviesCtrl.getMovieByID);

module.exports = router;
