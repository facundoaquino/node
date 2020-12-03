const productosController = {
    
    detalle: (req,res)=>{
        res.send(`Bienvenido al detalle del producto ${req.params.id}`)
    },
    detalleComentarios:(req,res)=>{

        if(req.params.idComentario){
    
            res.send(`Bienvenido los comentarios del producto ${req.params.id} estas en el comentario ${req.params.idComentario}`)
    
        }else{
            res.send(`Bienvenido los comentarios del producto ${req.params.id} `)
            
        }
    
    }

}

module.exports=productosController