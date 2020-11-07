// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

/*----------------------express---------------------*/

const express = require('express');
const app = express();
 

//se concatenan los parametros con & valor = valor

//http://localhost:3001/degradado?color2=orange&rotacion=199
app.get('/degradado',(req,res)=>{

    const {color1 = 'black' , color2 = 'gray' , rotacion = 50} = req.query
    res.send(`
        <style>
        body{
            background: linear-gradient(${rotacion}deg , ${color1},${color2})
        }
        </style>
        <body>
            
        </body>
    
    
    `)
})


app.listen(3001, () => {
	//no es obligatorio el 2do parametro , por convencion podemos dar un mensaje

	console.log('servidor levantado con exito');
});


//para servir archivos estaticos lo recomend able es utiliza un midleware, recibe una peticion del cliente y puede tomar desiciones