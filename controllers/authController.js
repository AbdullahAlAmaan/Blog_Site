const User=require('../models/user');
// Error Handling
const handleErrors=(err)=>{
  console.log(err.message, err.code);
  let errors=  {email:'',password:''}
  if(err.code===11000){
    errors.email='Email is already registered';
    return errors;
  }
  if(err.message.includes('user validation failed')){
   Object.values(err.errors).forEach(({properties})=>{
    errors[properties.path]=properties.message; 
   })

  }
  return errors;

}
const signup_get = async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
  }
}
const signup_post = async (req, res) => {
  const {email,password}=req.body;
  try {
    const user= await User.create({email,password})
    res.status(201).json(user)
  } catch (err) {
    const errors=handleErrors(err);
    res.status(401).json({errors})
  }
}
const login_get = async (req, res) => {
  try {
 console.log("hello")
  } catch (err) {
    console.log(err);
  }
}
const login_post = async (req, res) => {
  try {
    const {email,password}=req.body;
    res.render('login');
  } catch (err) {
    console.log(err);
  }
}
module.exports={
  signup_get,
  signup_post,
  login_get,
  login_post
}