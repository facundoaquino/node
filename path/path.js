const path = require('path')

// console.log(path);

const ruta = path.join('users', 'list', 'list.json')
const ext = path.extname(ruta)
const direction = path.dirname(ruta)

console.log(ruta)
console.log(ext)
console.log(direction)
