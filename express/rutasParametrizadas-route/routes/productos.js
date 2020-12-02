const express = require('express')
const router = express.Router()



router.get('/:id',(req,res)=>{
    res.send(`Bienvenido al producto ${req.params.id}`)
})


router.get('/:id/comentario/:idComentario?',(req,res)=>{

    if(req.params.idComentario){

        res.send(`Bienvenido los comentarios del producto ${req.params.id} estas en el comentario ${req.params.idComentario}`)

    }else{
        res.send(`Bienvenido los comentarios del producto ${req.params.id} `)
        
    }

})


module.exports=router