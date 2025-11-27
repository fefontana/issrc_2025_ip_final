// Declaramos dos variables que representan el stock inicial de soja y maíz.
// Usamos la palabra clave 'let' porque estos valores pueden cambiar durante el programa.
let stockSoja = 5000;  // Tenemos 5000 kilos de soja disponibles al comienzo
let stockMaiz = 8000;  // Tenemos 8000 kilos de maíz disponibles al comienzo

// Ahora pedimos al usuario que nos diga cuántos kilos se entregaron hoy.
// Usamos la función prompt(), que muestra una ventana emergente donde el usuario puede escribir algo.
// La función parseFloat() convierte ese texto en un número decimal (por ejemplo, 23.5).
let entregaSoja = parseFloat(prompt("¿Cuántos kilos de soja se entregaron hoy?"));
let entregaMaiz = parseFloat(prompt("¿Cuántos kilos de maíz se entregaron hoy?"));

// Es posible que el usuario escriba algo incorrecto (por ejemplo, letras en lugar de números).
// Por eso usamos la función isNaN() para verificar si el valor no es un número válido.
// Si no es válido (por ejemplo, escribió "hola" o dejó vacío), entonces lo cambiamos por 0.
// Esto evita errores cuando sumamos más adelante.
if (isNaN(entregaSoja)) entregaSoja = 0;  // Si el valor ingresado para soja no es válido, asumimos que fue 0
if (isNaN(entregaMaiz)) entregaMaiz = 0;  // Lo mismo para el maíz

// Sumamos la cantidad que se entregó hoy al stock que ya teníamos.
// El operador += sirve para decir "sumar y guardar el resultado en la misma variable".
// Es lo mismo que escribir: stockSoja = stockSoja + entregaSoja;
stockSoja += entregaSoja;  // Actualizamos el stock de soja con lo nuevo que se entregó
stockMaiz += entregaMaiz;  // Actualizamos el stock de maíz con lo nuevo que se entregó

// Mostramos el resultado final usando alert(), que abre una ventana con un mensaje.
// Usamos \n para hacer saltos de línea dentro del texto, así el mensaje se ve más ordenado.
alert("Stock actualizado:\n\nSoja: " + stockSoja + " kg\nMaíz: " + stockMaiz + " kg");
