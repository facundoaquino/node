// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

const { stdout } = require('process')

 
 /*---------------------- ejecutar procesos ---------------------*/

 const exec = require ('child_process').exec


 //ademas de un comando tambien podria mandar un script
 exec('dir',(error, stdout)=>{
     if(error){}
     console.log(stdout);
 })