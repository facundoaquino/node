// https://nodejs.org/api/ aca estan los modulos nativos de NODE los demas los instalamos con npm

/*----------------------MIDDLEWARE---------------------*/

 


 const arr = [1,2,3]

 console.log(arr instanceof Array)



 const obj1 = {
     nombre:'pepe',
     apellido:'jose'
 }

 const obj2 = {
     edad:33,
     deporte:'fiutbol'
 }

//  const unidos = Object.assign(obj1,obj2)

const {edad:total} = {...obj1 , ...obj2}
console.log(obj1,obj2);

console.log(total);

 