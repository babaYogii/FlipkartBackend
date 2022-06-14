const express = require('express');
const { signup, signin,signout} = require('../../controller/admin/auth');
const {requireSignin}= require('../../common-middleware/index')
const { ValidateSignupRequest, isRequestValidated, ValidateSigninRequest } = require('../../validators/auth');
const router = express.Router();






router.post('/admin/signin',ValidateSigninRequest , isRequestValidated ,signin);

router.post('/admin/signup',ValidateSignupRequest,isRequestValidated, signup);
router.post('/admin/signout',signout);
//added comment



module.exports=router;