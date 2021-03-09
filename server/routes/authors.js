const express = require('express');
const router = express.Router();

const AuthorsCtrl = require('../controllers/authors');

router.get('', AuthorsCtrl.getAuthors);

router.get('/:id', AuthorsCtrl.getAuthorByID);

router.delete('/:id', AuthorsCtrl.DeleteAuthorByID);

router.post('/create', AuthorsCtrl.CreateAuthor);

module.exports = router;
