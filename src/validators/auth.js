const {check, validationResult}=require('express-validator')

exports.ValidateSignupRequest = [
    check('firstName').isLength({min:2}).withMessage("Firstname is required"),
    check('email').isEmail().withMessage("Email is required"),
    check('lastName').isLength({min:2}).withMessage("Lastname is required"),
    check('password').isLength({min:6,max:10}).withMessage("please use a strong password")
 ]

 exports.ValidateSigninRequest = [
    check('email').isEmail().withMessage("Email is required"),
    check('password').isLength({min:6,max:10}).withMessage("Password is required")
 ]

 exports.isRequestValidated=(req,res,next)=>{
     const errors = validationResult(req);
     if(errors.array().length > 0){
         return res.status(400).json({error :errors.array()[0].msg})
     }
     next();
 }