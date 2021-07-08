const http =  require('http')

http.createServer((req,res) => {
    //write the response
    res.write('Hello World');
    res.end();
}).listen(8001,()=> {
    console.log('server running');
})