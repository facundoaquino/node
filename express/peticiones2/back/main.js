const bodyParser = require('body-parser')
const express = require('express')
const app = express()
 

//creamos usuario por defecto
const usuarios=[{

    nombre:'pepe',
    apellido:'fernandez',
    fechaNacimiento:'15/10/2005',
    pais:'argentina'
}]

app.get('/',(req,res)=>{
    res.send('Bienvenido al sitio')
})

//bodyparser ayuda a poblar el json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

/*---------------------- crear un usuario ---------------------*/
//la estructura de REST Api no es propia de nodejs sino que es un standar

// probar con postman en body y despues x-wwww-form-urlñencoded
app.post('/usuarios',(req,res)=>{
    console.log(req.body,'go');
   let usuario = {
       nombre:req.body.nombre,
       apellido:req.body.apellido,
       fechaNacimiento:req.body.fechaNacimiento,
       pais:req.body.pais,
   }

   usuarios.push(usuario)
   res.send({mensaje:'Regristro Guardado' })
   console.log(usuarios)
})


/*---------------------- OBtener un usuario ---------------------*/


app.get('/usuarios/:id',(req,res)=>{
    
    usuarios[req.params.id]?    
    res.send(usuarios[req.params.id]):
    res.send({message:'usuario no existe'}) 
   
    


})


/*---------------------- obtener todos los usuarios ---------------------*/

app.get('/usuarios',(req,res)=>{
    res.send(usuarios)
})

/*---------------------- actualizar un usuario ---------------------*/

app.put('/usuarios/:id',(req,res)=>{
    let usuario = {
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        fechaNacimiento:req.body.fechaNacimiento,
        pais:req.body.pais,
    }
    
    usuarios[req.params.id]=usuario
    res.send({message:'usuario actualizado'})
    
})

/*---------------------- eliminar un usuario ---------------------*/

app.delete('/usuarios/:id',(req,res)=>{
        usuarios.splice(req.params.id,1)
        res.send({message: 'usuario eliminado'})
})


    app.listen(3001,()=>{
        console.log('servidor levantado');
    })