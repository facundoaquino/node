module.exports = {
    get (req,res ){
        res.send('metodo get ejecutado')
    },
    post (req,res ){
        res.send('metodo post ejecutado')
    },
    put (req,res ){
        res.send('metodo update ejecutado')
    },
    delete (req,res ){
        res.send('metodo delete ejecutado')
    }
}