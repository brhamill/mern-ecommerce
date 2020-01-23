const express = require('express');
const router = express.Router();

const {
  create,
  list,
  read,
  remove,
  update,
  listRelated,
  listCategories,
  search,
  photo,
  productById
} = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/products/related/:productId', listRelated);
router.get('/products/photo/:productId', photo);
router.get('/products/categories', listCategories); 
router.get('/products', list);
router.get('/products/:productId', read);
router.post('/products/search', search);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.delete(
  '/products/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  '/products/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
