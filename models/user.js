const mongoose=require('mongoose')
const {isEmail}=require('validator')
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema;
const userSchema= new Schema(// creates the  properties that the user will have
  {
  email:{
    type: String,
    required:[true,'Please enter an email'], 
    unique:true,
    lowercase:true,
    validate:[isEmail,'Please enter a valid email']
  },
  password:{
    type: String,
    required:[true,'Please enter a valid password'],
    minlength:[6, 'minimum password length is 6 characters'],
  }
} 
)
userSchema.post('save',(doc,next)=>{
  console.log('new user was created and saved to db', doc);
  next();
})
userSchema.pre('save', async function(next){
  const salt= await bcrypt.genSalt();
  this.password=await bcrypt.hash(this.password,salt)

})
const User= mongoose.model('user',userSchema,'users');// this is the creation, where there will be a user that will adopt the properties
module.exports=User;