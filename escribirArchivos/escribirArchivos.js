// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

const fs = require('fs');
const archivo = 'pru.json';

/*----------------------escribir ARCHIVOS ---------------------*/

/* VALIDAR EXISTENCIA DE ARCHIVO CON EXESTS  Y ACESS


 //comprobando si un archivo existe con fs, sincrono 

 console.log(fs.existsSync(archivo));*/

//-----------ver tambien metodo fs.acess para validar la existencia de un arhivo

const array = [
	{
		nom: 'pepito ',
		pai: 'uruguay',
		hob: 'percusions',
	},
	{
		nom: 'marito ',
		pai: 'uruguay',
		hob: 'percusions',
	},
	{
		nom: 'juana ',
		pai: 'uruguay',
		hob: 'percusions',
	},
];


const json = JSON.stringify(array, null, ' ');
array[0].nom='ahora me llamo como quiero'

// sincrono
// const resultado = fs.writeFileSync(archivo, json);
// console.log(resultado);


// asincrono 

fs.writeFile(archivo,json,(err)=>{
    if(err){
        // error
    }
    console.log('el archivo se ha escrito correctamente');
})

