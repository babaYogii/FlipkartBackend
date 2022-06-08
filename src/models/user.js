const mongoose=require('mongoose');
const bcrypt=require('bcrypt')


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        max:20
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        max:20
    },
    userName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    hashPassword:{
        type:String,
        required:true,
        length:10
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    contactNumber:{
        type:String,
    },
    profilePicture:{type:String},

},{timestamps:true})


userSchema.virtual('password').set(function(password){
    this.hashPassword=bcrypt.hashSync(password,10);
});

userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

userSchema.methods={
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hashPassword);
    }
}


module.exports = mongoose.model('User',userSchema);
