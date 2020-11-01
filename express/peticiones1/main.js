// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

/*----------------------MIDDLEWARE---------------------*/

 const express = require('express')
 const app = express()

 app.use(express.static('public'))


 // cuando mandamos por get la infomarcion se manda por url , en un formato que se llama URLENcoded
 //URL?parametro1=valor & parametro2=valor & .....
// los caracteres especiales como un espacio o un @ los codifica en la url

//-----------

//con query accedemos a los parametros de la url 
//query es un json que se envia con toda la informacion de la url

// app.get('/guardar',(req,res)=>{

// res.send(`Guardar el usuario ${req.query.nombre}`)
// })



//-----------

/* ya no podemos utilizar query para leer los parametros por post
necesitamos un modulo extra para leer los parametros que se envien
a travez de post , un modulo conocido es body-parser
Un parseador es cuando pasa de un formato a otro formato

*/
const bodyParser =require('body-parser')

/*creamos un middleware y usamos bodyparser.json para tener nuestros json*/
/*con POST LOS DATOS SE ENVIAN EMPAQUETADOS NO VISIBLES EN EL CUERPO DE LA PETICION*/
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))
app.post('/guardar',(req,res)=>{

    res.send(`Guardar el usuario ${req.body.nombre}`)
    console.log(req.body);
    console.log(req);
})

 app.listen(3005)