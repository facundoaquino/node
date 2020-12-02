const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Bienvenido al sitio')
})

router.get('/contacto',(req,res)=>{
    res.send('Dejanos tu contacto')
})

module.exports=router