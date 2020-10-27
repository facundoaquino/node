// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm
 
 /*---------------------- eventos ---------------------*/

 const events = require('events')
 const emitter= new events.EventEmitter()

 emitter.on('eventoCustom',(mensaje,status)=>{
	 console.log(`${status} : ${mensaje}`);


 })


 emitter.emit('eventoCustom', 'mensaje cargado con exito', 200)