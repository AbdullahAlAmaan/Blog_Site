const express=require('express')
const app=express()
const mongoose =require('mongoose')
const Blog = require('./models/blog')

app.set('view engine','ejs')
const dbURI='mongodb+srv://amaanhreed028:<Arifsharmin@2020>@nodeprac.uiyfnsw.mongodb.net/?retryWrites=true&w=majority&appName=NodePrac'
mongoose.connect(dbURI).then((result)=>{app.listen(3000)}).catch((err)=>{console.log("error")});
app.get('/', (req,res)=>{
  req.
  res.sendFile('./paths/index.html',{root: __dirname})
})
// app.get('/about', (req,res)=>{
//   res.sendFile('<h1>Hello</h1>')
// })
app.get('/blog', (req,res)=>{
  const blog=new Blog({
    title:'new blog',
    snippet:'about my new blog',
    body:'more about my new blog'
  })
  blog.save().then((result)=>{res.send(result)}).catch((err)=>{console.log("error")});
})
app.get('/blogsearch', (req,res)=>{
Blog.findById('72097398737817').then((result)=>{res.send(result)}).catch((err)=>{console.log("error")})
})
app.get('/about', (req,res)=>{
  res.sendFile('./paths/hello.html',{root: __dirname})
})
app.get('/about-us',(req,res)=>{
  res.redirect('./paths/go.html')
})
app.use((req,res)=>{
  res.send('<h1>Error</h1>')
})