// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

/*----------------------HTTP---------------------*/
const fs = require('fs');
const http = require('http');
//  console.log(http.createServer());

const server = http.createServer((req, resp) => {
	// se ejecuta por cada peticion del usuario req peticion , resp respuesta
	//definimos las cabezeras que enviamos
	// el primer parametro de writehead hace referencia al codigo de status HTTP
	//el segundo parametro define el tipo de contedio que esta enviando el response es un obj literal y puede ser texto plano html o json
	resp.writeHead(200, {
		'Content-Type': 'text/html',
	});
	//resp.end siempre tiene que recibir un string , si o si
	// req.url== '/productos'?resp.end('bienvenido a productos'):resp.end('aca probando nodejs')

	if (req.url == '/formulario') {
		fs.readFile('./formulario.html', (err, data) => {
			if (err) {
			}
			resp.writeHead(200, {
				'Content-Type': 'text/html',
			});
			resp.write(data);
			resp.end();
		});
	}  else {
		
	}
});

server.listen('3931', 'localhost');
