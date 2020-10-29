// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

/*----------------------DIRECTORIOS---------------------*/

const fs = require('fs');

//crear el directorio , forma sincrona
// fs.mkdirSync('img')

//-----------validamos si existe carpeta sino la creamos con el metodo asincrono

if (fs.existsSync('css')) {
	console.log('la carpeta ya existe');
} else {
	fs.mkdir('css', (err) => {
		if (err) {
			//error
		}

		console.log('carpeta creada correctamente');
	});
}
