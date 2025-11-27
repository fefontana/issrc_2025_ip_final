// Declaramos el stock inicial de los productos usando let.
// Usamos let porque el valor del stock puede cambiar (es dinámico). Ojo!!!
let stockSoja = 5000;  // Stock inicial de soja en kilos
let stockMaiz = 8000;  // Stock inicial de maíz en kilos


// A continuación declaramos una FUNCIÓN que se encarga de PEDIR UN NÚMERO válido.
// Las funciones nos permiten agrupar instrucciones que realizan una tarea específica
// y reutilizar ese conjunto de instrucciones cuando sea necesario independiente 
// de el cereal que usemos o lo que querramos.
// En este caso, la función se llama pedirNumero, y su tarea es:
// * Pedir un dato al usario
// .* Verificar que el dato sea un número valido
// .* Repetir la solicitud si el dato ingresado no es válido
// .* Finalmente, devolver el número ingresado (ya convertido a número decimal)

function pedirNumero(mensaje) {
  // Mostramos un mensaje al usuario y guardamos lo que escribe en la variable 'valor'.
  //mensaje es un parámetro de la función pedirNumero.

//(mensaje) Es como una variable temporal que recibe un 
// valor desde afuera de la función cuando la llamás podria ser(carlitos)
//le ponemos algo que sea representativo acá pasamos por parametro(lo vemos en clase)
  // prompt() siempre devuelve un texto (string).
  let valor = prompt(mensaje);

  // Usamos un bucle whiile para verificar que el usuario haya ingresado un valor correcto.
  // El bucle se repite mientras:
  // - isNaN(valor)  verifica si lo ingresado "no" es un número (por ejemplo, letras o símbolos)
  // - valor.trim() === "" → verifica si el usuario no escribió nada (cadena vacía)
  // trim() elimina espacios en blanco antes y después del texto "buenisma función".
  while (isNaN(valor) || valor.trim() === "") {
    // Si el dato no es válido, volvemos a pedirlo
    valor = prompt("Entrada no válida. " + mensaje);
  }

  // Si el usuario escribió un número válido, convertimos ese texto a un número decimal
  // usando parseFloat() parseamos, y lo devolvemos.
  // return es la instrucción que nos permite enviar un resultado hacia afuera de la función. Ya lo vieron en
  //cursillo no lo abandonen.
  return parseFloat(valor);
}


// Ahora que ya tenemos nuestra función pedirNumero, la usamos para pedir los datos.
// En lugar de repetir el mismo código para cada producto, simplemente llamamos a la función.
// Le pasamos un mensaje personalizado como argumento, y la función hace el resto.

let entregaSoja = pedirNumero("¿Cuántos kilos de soja se entregaron hoy?");
let entregaMaiz = pedirNumero("¿Cuántos kilos de maíz se entregaron hoy?");



// Sumamos la cantidad entregada al stock original.
// El operador += sirve para sumar y guardar el nuevo resultado en la misma variable.
// Por ejemplo: stockSoja = stockSoja + entregaSoja ACUMULAMOS

stockSoja += entregaSoja;  // Actualizamos el stock de soja
stockMaiz += entregaMaiz;  // Actualizamos el stock de maíz


// Mostramos el resultado final al usuario con alert().
// Usamos la sintaxis ${variable} Template literal o string dentro de una cadena entre comillas invertidas (``)
// para que el texto se vea más limpio y ordenado (esto se llama interpolación).
// También usamos \n para hacer saltos de línea dentro del mensaje.
//Quedo Joya...

alert(`Stock actualizado:\n\nSoja: ${stockSoja} kg\nMaíz: ${stockMaiz} kg`);