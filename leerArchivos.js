// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

 
 
 /*----------------------LEER ARCHIVOS ---------------------*/


const fs = require('fs')


//funcion sincrona
// const file = fs.readdirSync('./')
// console.log(file[1]);

//la manera asincrona para leer por ejemplo un directorio


fs.readdir('./', (err,file)=>{

    if(err){
        //error
    }
    console.log(  file);
    const fileAleer = fs.readFileSync(file[2], 'utf-8')  
    console.log(typeof fileAleer);

    //LEYENDO ASINCRONO
    fs.readFile('./package.json','utf-8',(error,archivo)=>{
        if(error){
            // error
        }
        console.log(archivo);
    })


})

console.log('hey tendria tendria que estar despues')