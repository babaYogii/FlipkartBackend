const express = require("express");
const { requireSignin, AdminMiddleware } = require("../common-middleware");
const multer=require('multer')
const { addCategory, getCategory } = require("../controller/category");
const router = express.Router();
const path = require('path');
const shortid=require('shortid')
const { dirname } = require("path");



const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),"uploads"))
    },
    filename:function(req,file,cb){
        cb(null,shortid.generate() + '-' + file.originalname)
    }
})
const upload = multer({storage})

router.post('/category/create',requireSignin,AdminMiddleware,upload.single('categoryImage'),addCategory)
router.get('/category/getcategory',getCategory)








module.exports = router;