// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

/*----------------------MIDDLEWARE---------------------*/

const express = require('express');
const app = express();
 
//para servir archivos estaticos lo recomendable es utiliza un midleware, recibe una peticion del cliente y puede tomar desiciones

// use es la funcion que se utiliza para ejecutar middleware
//en este caso si encuentra lo que busca en public lo envia sino sigue evaluando
app.use(express.static('public'))

// con use estamos registrando un middleware al nivel de la aplicacion


//creando otro middleware
//por convencion se define next para hacer la llamada al siguiente middleware, con next podemos decidir si queremos que continue la ejecucion o queremos que se detenga con un error por ejemplo
app.use((req,res,next)=>{
next()
})

app.get('/',(req,res)=>{
    res.json({
        status:'ok'
    })
})

app.listen(3000, () => {
	//no es obligatorio el 2do parametro , por convencion podemos dar un mensaje

	console.log('servidor levantado con exio');
});