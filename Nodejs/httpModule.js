var http = require('http');

var handleRequest = function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write("<h1>Hello</h1>");
	setTimeout(function(){
		response.end('<h1>Welcome to Nodejs learning</h1>');
	},4000);
};

var server = http.createServer(handleRequest);
server.listen(3000,'localhost');
console.log('Listening on 3000 port at localhost');