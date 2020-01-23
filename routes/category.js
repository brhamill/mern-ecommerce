const express = require('express');
const router = express.Router();

const {
  create,
  list,
  read,
  update,
  remove,
  categoryById
} = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/categories', list);
router.get('/categories/:categoryId', read);
router.post('/categories/:userId', requireSignin, isAuth, isAdmin, create);
router.put(
  '/categories/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.delete(
  '/categories/:categoryId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
