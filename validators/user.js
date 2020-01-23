const { check } = require('express-validator');

exports.userSignupValidator = [
  check('name')
    .notEmpty()
    .withMessage('Name is required'),

  check('email')
    .isEmail()
    .isLength({ min: 4, max: 32})
    .withMessage('Must be a valid email address'),

  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
];

// exports.userSigninValidator = [
//   check('email')
//     .isEmail()
//     .withMessage('Must be a valid email address'),

//   check('password')
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least 6 characters long')
// ];

// exports.forgotPasswordValidator = [
//   check('email')
//     .notEmpty()
//     .isEmail()
//     .withMessage('Must be a valid email address')
// ];

// exports.resetPasswordValidator = [
//   check('newPassword')
//     .notEmpty()
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least 6 characters long')
// ];
