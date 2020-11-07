const express = require('express')
const app = express()

//JSON 
//modifica la identacion 
app.set('json spaces',55)




app.get('/json',(req,res)=>{

    res.json({nombre : 'Federico'})
})



//DOWNLOAD
//podemos renombrar el archivo y si queremos pasar un callback de err si hay
app.get('/load',(req,res)=>{
    
    // res.download('middleware.js')

    //podemos renombrar el archivo

    res.download('middleware.js', 'archivorenombrado.js',(err)=>{
        //manejar error
    })
})


app.listen(3009 , ()=>{


    console.log('servidor levantado');
}
)