const express = require('express');
const { signup, signin, requireSignin } = require('../controller/auth');
const { isRequestValidated, ValidateSignupRequest, ValidateSigninRequest } = require('../validators/auth');
const router = express.Router();


router.post('/signin',ValidateSigninRequest , isRequestValidated,signin);

router.post('/signup',ValidateSignupRequest,isRequestValidated ,signup);

// router.post('/profile', requireSignin ,profile)

module.exports=router;