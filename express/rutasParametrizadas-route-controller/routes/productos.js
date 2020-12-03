const express = require('express')
const productosController = require('../controllers/productosControllers.js')
const router = express.Router()
 

router.get('/:id',productosController.detalle)


router.get('/:id/comentario/:idComentario?', productosController.detalleComentarios)


module.exports=router