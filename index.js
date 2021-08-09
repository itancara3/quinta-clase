// function exampleCallback(resolveFunction) {
//   const datosDB = {
//     total: 1,
//     rows: [{
//       nombre: 'Ivan',
//       apellidos: 'Tancara Casilla'
//     }]
//   }
//   return resolveFunction(datosDB);
// }


// exampleCallback((respuesta) => {
//   console.log(respuesta);
// });




// function promesaDoSomething(funcionParametro) {
//     return setTimeout(() => {
//         funcionParametro('Vamos bien');
//     }, 3000);
// }

// promesaDoSomething((m) => {
//     console.log(m);
// });


var variable = 'variable';
var variable = 'OTRO VALOR';
var variable = 'NUEVO VALOR';



let variableLet = 'Variable let';
// let variableLet = 'Otra variable let';
variableLet = 'Nuevo valor de la variable LET';

console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
console.log(variableLet);
console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');

const constante = 'Constante ';
// constante = 'Nuevo valor constante';

function imprimir () {
  console.log(variable);
}

let variable2 = 'Hola desde let';

function imprimir2 () {
  console.log(variable);
}

imprimir2();

// const express = require('express');
// const app = express();
// const port = 3000;

// function promesa() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('EJECUCION DE LA PROMESA')
//     }, 5000);
//   })
// }

// promesa().then((respuesta) => {
//   console.log(respuesta);
// })

// console.log('EJECUCION DE LA LINEA 44');


// app.get('/', async (req, res) => {
//   const respuesta = await promesa();
//   console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
//   console.log(respuesta);
//   console.log('==============================_MENSAJE_A_MOSTRARSE_==============================');
//   res.status(200).json({
//     datos: respuesta
//   });
// });


// app.listen(port, () => {
//   console.log('Servidor corriendo correctamente');
// })