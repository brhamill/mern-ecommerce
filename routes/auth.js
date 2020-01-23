const express = require('express');
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin
} = require('../controllers/auth');

// import validators
const { userSignupValidator } = require('../validators/user');
const { runValidation } = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;
