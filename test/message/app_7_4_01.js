/**
 * Created by Panda on 14-7-4.
 */

var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello cja2y</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");