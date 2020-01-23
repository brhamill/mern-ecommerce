const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { read, update, userById } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  })
});

router.get('/users/:userId', requireSignin, isAuth, read);
router.put('/users/:userId', requireSignin, isAuth, update);

router.param('userId', userById);

module.exports = router;
