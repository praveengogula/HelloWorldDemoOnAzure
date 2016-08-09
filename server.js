var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Mr.Chanakya Lokam from Miracle Innovation Labs. Welcome to Azure Cloud\n');
}).listen(port);
