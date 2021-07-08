const Person =  require('./person')
console.log('hi hello')
const person1 =  new Person('veena',37)
person1.greeting()

const loggerfrom =  require('./logger')

const log = new loggerfrom();

log.on('message',data =>  console.log('message',data))

log.log('veena here')

log.log('hi here')

console.log(__dirname);
const http = require('http')
const fs =  require('fs')
const path = require('path')

http.createServer((req,res) => {
    //write the response
    if(req.url === '/'){
    fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
       if(err) throw err;
       
        res.writeHead(200,{'Content-Type' : 'text/html'});
        
        res.end(content);

       });
        

    } 
    console.log(req.url)
    if(req.url === '/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
                   if (err) throw err;
                   res.writeHead(200,{'Content-Type' : 'text/html'});
                   res.end(content)

        })
    }

    if(req.url === '/api/users'){
        const users = [
            {name:'veena',age:34},
            {name:'deepa', age:36}
        
        ]
        res.writeHead(200,{'Content-Type' : 'application/json'});
                   res.end(JSON.stringify(users));

    }
    
}).listen(5001,()=> {
    console.log('server running');
});