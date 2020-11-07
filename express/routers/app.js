const express = require('express')
const app = express()
const user = require('./controllers/users')
console.log(user);
//ROUTE
//Express nos permite crear una ruta y de ahi registrar todos los metodos

app.route('/users')
.get(user.get)
    .post(user.post)
    .put(user.put)
    .delete(user.delete)
    
    
    /*---------------------- route creado en carpeta route ---------------------*/
    
    const routes = require('./route/index')
    // app.use(routes)

    //podemos establecer un alias

    app.use('/usuario/:id',routes)
    


    /*---------------------- DEFECTO ---------------------*/

    app.get('*',(req,res)=>{
        res.send('PAGINA CON ROUTES')
    })
    
    app.listen(3000, ( )=>{
        console.log('servidor de routers levantado');
    })