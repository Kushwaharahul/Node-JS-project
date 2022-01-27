/* Loading http module*/
var http = require('http');

/* Returns a new web server object*/
var server = http.createServer(function(req,res){

	/* Sends a response header to the request.*/
	res.writeHead(200,{'content-type':'text/html'});
        
          /*sends a chunk of the response body*/
	res.write('<h1>Hello KLFS</h1>')

	 /* signals server that all the responses has been sent */
	res.end('<b>Response Ended</b>')

});

/* Accepting connections on the specified port and hostname. */
server.listen(3000);
server.on('request',function(req){
	console.log("received request");
});

console.log('server listening on localhost:3000');
