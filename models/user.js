const mongoose=require('mongoose')
const Schema=mongoose.Schema();
const userSchema= new Schema(// creates the  properties that the user will have
  {
    name:{
      type: string,
      required:true
  },
  email:{
    type: string,
    required:true
  },
  password:{
    type: string,
    required:true
  }
}
)
const User= mongoose.model('user',userSchema);// this is the creation, where there will be a user that will adopt the properties
module.exports=User;