// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

// npx nodemon -q
 
 //modulo de readline

 const readline = require('readline')
//  console.log(readline)

const persona = {
	nombre: '' ,
	comentario : []
}

const rl = readline.createInterface(process.stdin,process.stdout)
rl.question('Cual es tu nombre? ', (respuesta) => {
	 
	persona.nombre= respuesta;
	rl.setPrompt('decime un comentario ')
	rl.prompt()

	// process.exit()
	// rl.close()
  });

rl.on('line',(input)=>{
	if(input==='salir'){
		process.exit()
	}
		persona.comentario.push(input)
	rl.setPrompt('decime un comentario ')
	rl.prompt()
})