const http=require('http')

const server =http.createServer((req,res)=>{  //response et request 
//    // res.statusCode=200
//    res.setHeader('Content-type','text/html')
//  res.write("welc")


if(req.url=='/home')
{
    res.write('haythem')
}
else if(req.url=='/ho')
{
    res.write('mastour')  
}

res.end()
})

 server.listen(3000,()=>{console.log("running")})//bech ncha4el server //msg pour verifier server running
 