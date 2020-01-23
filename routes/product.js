const express = require('express');
const router = express.Router();

const { create, read, remove, update, productById } = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/product/:productId', read);
router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);
router.delete(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
