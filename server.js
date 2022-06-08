const express=require('express');
const env = require('dotenv');
const app=express();
const bodyParser=require('body-parser');
const mongoose =require('mongoose')

const authRoutes= require("./src/routes/auth")
const adminauthRoutes= require("./src/routes/admin/auth")
const categoryRoutes=require("./src/routes/category")
const productRoutes=require("./src/routes/product")
const cartRoutes=require("./src/routes/cart");
const path= require('path')
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.use('/public',express.static(path.join(__dirname,'/src/uploads')))
console.log(path.join(__dirname,'/src/uploads'))
app.use('/api',authRoutes)
app.use('/api',adminauthRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)
app.use('/api',cartRoutes)




//Calling dot env
env.config();


//mongo db connection
const db=process.env.DB;
mongoose.connect(db,
    err => {
        if(err) throw err;
        console.log('Sucessfull')
    });



//



app.listen(process.env.PORT,()=>{
    console.log(`running at ${process.env.PORT}`)
})