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
