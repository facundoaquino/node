// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

/*----------------------express---------------------*/

const express = require('express');
const app = express();
//el objeto que devuleve express tiene metodos asociaods para gestionar las peticiones que se hagan a travez del DELETE, PUT Y PATCH

//direccionamiento con app.get

// si se cumple la url se cumple la funcion
app.get('/', (req, res) => {
	res.send('<html><body><h1>Hola mundo LOco</h1></body></html>');
});



app.get('/pagina1', (req, res) => {
    res.send(`<html><body><h1>${req.url} levantada </h1></body></html>`);
    
});


//se puede especificar un acceso a ruta por una expresion regular

app.get('/abc*123', (req, res) => {
    res.send(`<html><body><h1>cunple con el patron !!! bienvenido </h1></body></html> ${req.url}`);
    
});



// obtener parametros de la url con :

app.get('/capitulo/:numerocapitulo', (req, res) => {
    res.send(`<html><body><h1>ver capitulo ${req.params.numerocapitulo} </h1></body></html>  `);
    
});



//levantando servidor

app.listen(3000, () => {
	//no es obligatorio el 2do parametro , por convencion podemos dar un mensaje

	console.log('servidor levantado con exio');
});


//para servir archivos estaticos lo recomendable es utiliza un midleware, recibe una peticion del cliente y puede tomar desiciones