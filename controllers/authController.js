const User = require('../models/user');
const jwt=require('jsonwebtoken')

// Error Handling
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  // Handle duplicate email error (MongoDB code 11000)
  if (err.code === 11000) {
    errors.email = 'Email is already registered';
    return errors;
  }

  // Handle validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};
const maxAge=3*24*60*60;  
const createToken=(id)=>{
  return jwt.sign({id},'ABDULLAH AL AMAAN',{expiresIn:maxAge}) 
}

const signup_get = async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token=createToken(user._id)
    res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
    res.status(201).json({user:user._id});
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // 400 Bad Request for client-side errors
  }
};

const login_get = async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};
  
const login_post = async (req, res) => {
  
  try {
  
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.status(400).json({ errors }); // 400 Bad Request for failed login attempts
  }
};

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post,
};
