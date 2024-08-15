//Practice
// const http=require('http');
// const fs=require('fs')
// const server=http.createServer((req, res)=>{
//   console.log("req made")
//   res.setHeader('Content-type','html')
// let path='./paths/';
// switch(req.url){
//   case '/':
//     path +='index.html';
//     break;
//   case '/about'  :
//     path+='go.html';
//     break;
//   default:
//     path+='hello.html';  

// }
//   fs.readFile(path,(err,data)=>{
//     if(err){
//       console.log(err)
//       res.end()
//     }
//     res.write(data)
//     res.end()
//   })
  
// });
// server.listen(3000,()=>{
//   console.log("hello")
// })
// Render the homepage with blogs
// app.get('/', requireAuth, async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.render('index', { title: 'Home', blogs });
//   } catch (err) {
//     console.log(err);
//     res.render('index', { title: 'Home', blogs: [] }); // Ensure blogs is always passed
//   }
// });
// // Ensure that this route renders the blogs page with the blogs data