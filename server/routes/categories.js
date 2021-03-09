const express = require('express');
const router = express.Router();

const CategoriesCtrl = require('../controllers/categories');
const AuthCtrl = require('../controllers/auth');

router.get('', CategoriesCtrl.getCategories);

router.get('/:id', CategoriesCtrl.getCategoryByID);

router.get('/secret',AuthCtrl.onlyAuthUser, CategoriesCtrl.getSecrets);

router.delete('/:id', CategoriesCtrl.DeleteCategoryByID);

router.put('/:id', CategoriesCtrl.EditCategoryByID);

router.post('', CategoriesCtrl.CreateCategory);

module.exports = router;

