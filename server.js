
var http = require('http');
var url = require('url');

function iniciar(route, handle){
	http.createServer(function(request, response){
	var pathname = url.parse(request.url).pathname;
	console.log("Petición para " + pathname + " recibida.");
	route(handle, pathname);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("hola mundo!");
	response.end();}).listen(8888);
	console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
	

