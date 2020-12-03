const express = require ('express')
const app = express()
const rutasProductos = require('./routes/productos.js')
const rutasMain = require('./routes/main.js')


// midelware para usar las rutas de productos.js

app.use('/productos', rutasProductos)
app.use('/', rutasMain)


app.listen(3000)