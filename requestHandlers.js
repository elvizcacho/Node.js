
function iniciar(){
	console.log('request Handler "iniciar" ha sido llamado.');
}

function subir(){
	console.log('Manipulador de petición "subir" ha sido llamado.');
}

exports.iniciar = iniciar;
exports.subir = subir;