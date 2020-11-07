
//para pasar los parametros si es que tenemos un alias hay que usar el mergeparams en true
const router = require('express').Router({mergeParams:true})



router.get('/perfil', (req,res)=>{
    res.send('PERFIL')
})

router.get('/fotos/:fotoID', (req,res)=>{
    res.send(`usuario : ${req.params.id} foto: ${req.params.fotoID}`)
})


module.exports= router