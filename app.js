const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const path = require('path');
const app = express();
const dotenv=require('dotenv')
dotenv.config();


app.use(express.static(path.join(__dirname, 'public')));

const dbURI = process.env.DB_URI;

console.log('Connecting ...'); // For debugging

// Connect to MongoDB & listen for requests
mongoose.connect(dbURI)
  .then(() => app.listen(3000, () => {
    console.log('Connected to MongoDB');
  }))
  .catch(err => console.log('MongoDB connection error:', err.message));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});