//  Llegada de clientes
fila.push("Ana");
fila.push("Luis");
fila.push("Carlos");
fila.push("Marta");
fila.push("Sofía");
console.log("Fila después de la llegada de clientes:", fila);

// Carlos (índice 2) se retira sin esperar
let clienteRetirado = fila.splice(2, 1); // Elimina a "Carlos"
console.log("Cliente que se retira sin ser atendido:", clienteRetirado[0]);
console.log("Fila después de la retirada de Carlos:", fila);

// Pedro se cuela al principio
fila.unshift("Pedro");
console.log("Fila después de que Pedro se cuela al principio:", fila);

//  Se atienden a los dos primeros clientes
let atendido1 = fila.shift(); // Atiende a "Pedro"
let atendido2 = fila.shift(); // Atiende a "Ana"
console.log("Clientes atendidos:", atendido1, "y", atendido2);
console.log("Fila después de atender a dos clientes:", fila);

//  El último cliente se arrepiente y se va
let clienteArrepentido = fila.pop(); // Elimina a "Sofía"
console.log("Cliente que se arrepiente y se va sin ser atendido:", clienteArrepentido);
console.log("Fila después de la retirada del último cliente:", fila);

//  Mostrar los clientes restantes en la fila
//funcion flecha algo nuevo....pueden y deben investigar
console.log("Clientes restantes en la fila:");
fila.forEach((cliente, index) => {
  console.log(`${index + 1}. ${cliente}`);
});

// Crear una copia de la fila
let copiaFila = fila.slice();
console.log("Copia de la fila actual:", copiaFila);
