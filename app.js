const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const dbURI = process.env.DB_URI;

console.log('Connecting ...'); // For debugging

// Connect to MongoDB & listen for requests
mongoose.connect(dbURI)
  .then(() => app.listen(3000, () => {
    console.log('Connected to MongoDB');
  }))
  .catch(err => console.log('MongoDB connection error:', err.message));

// Register view engine
app.set('view engine', 'ejs');

// Middleware & static files
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// Routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Blog routes
app.use('/blogs', blogRoutes);

// Auth Routes

app.use(authRoutes)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
