const http = require('http');
http.createServer((req,res)=>{
    res.end("Hello from DevOps Project");
}).listen(3000);