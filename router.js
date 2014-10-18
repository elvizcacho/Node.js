
function route(handle, pathname){
	if(pathname != '/favicon.ico'){
		handle[pathname]();
		console.log("A punto de rutear una peticion para " + pathname);	
	}
}

exports.route = route;