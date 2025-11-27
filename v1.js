//Versión 1: Básica con Variables y Condicionales
// Crear un programa simple que simule un cajero automático para retirar dinero.
//Usar variables let y const para manejar el saldo y el monto a retirar.
// Usar condicionales (if, else) para validar que el monto a retirar no supere el saldo disponible.
// Mostrar mensajes en la consola con console.log indicando si el retiro 
// fue exitoso o si hay error.
// Usar un array para guardar los billetes disponibles (por ejemplo: [1000, 500, 200, 100]).
// Imprimir en consola cuántos billetes de cada tipo se entregan para completar el monto.

// no podemos reasignar esa variable para que apunte a otro array u objeto diferente.
// sí podemos modificar el contenido interno del array u objeto, como agregar, 
// eliminar o cambiar elementos o propiedades.
const numeros = [1, 2, 3];  // 'numeros' apunta a un array en memoria

numeros.push(4);            //  Modificamos el contenido del array (agregamos un elemento)
console.log(numeros);       // Salida: [1, 2, 3, 4]
numeros = [5, 6, 7];        //  Error: no podemos hacer que 'numeros' apunte a otro array diferente