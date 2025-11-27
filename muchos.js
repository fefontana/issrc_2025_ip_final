// EJERCICIO 1: Conversor de Pesos a Dólares
// Consigna: Solicitar un monto en pesos, convertirlo a dólares (valor fijo) 
// y mostrar el resultado.
// Utilizar let, const, if, console.log(), alert(), prompt(), parseFloat().

// //////////////////////////////////////////////

// // EJERCICIO 2: Manejo de Stock en Ferretería
// // Consigna: Pedir la cantidad actual de tornillos y avisar si hay que reponer stock.
// // Utilizar let, const, if, console.log(), alert(), prompt(), parseFloat().

// let cantTornillos = parseFloat(prompt("Ing.:"));
// const stockMinimo = 50;

// if (cantTornillos >= stockMinimo){
//     alert("Stock Suficiente puede comprar");
// }else {
//     alert("ATENCION  Necesita comprar su stock critico es :"+stockMinimo);
// }

// const stockTornillo = 400;
// const reponerStock = stockTornillo - 30;
// let tornillos = parseFloat(prompt('Cuantos tornillos necesita?'));
// if(tornillos >stockTornillo){
//     alert('Usted pidio por encima del Stock');
    
// }else if(tornillos >= reponerStock && tornillos === stockTornillo){
//     alert('Usted pidio: ' + tornillos + ', no tenemos Stock');
//     console.log('Usted pidio: ' + tornillos + ', y casi no hay stock');
// }else{
//     alert('Usted compro: ' + tornillos);
//}


// const stockTornillo = 400;
// const reponerStock = stockTornillo - 30; //370
// let tornillos = parseFloat(prompt('Cuantos tornillos necesita?'));
// if(tornillos > stockTornillo){
//     alert('Usted pidio por encima del Stock');
      
// }else if(tornillos === stockTornillo){
//     alert('usted pidio todo el stock: '+ tornillos +'tornillos.');
// }else if(tornillos >= reponerStock ){
//     alert('Usted pidio: ' + tornillos + ', y casi no hay stock');
//     console.log('Usted pidio: ' + tornillos + ', y casi no hay stock');
// }else{
//     alert('Usted compro: ' + tornillos);

// }







// //////////////////////////////////////////////

// // EJERCICIO 3: Cómputo de Votos para Elecciones
// // Consigna: Solicitar votos de dos candidatos y determinar quién ganó o si hubo empate.
// // Utilizar let, const, if, else if, alert(), prompt(), parseFloat().
// 
// let votosCandidato1 = parseFloat(prompt("Ingrese los votos obtenidos por el primer candidato:"));
// let votosCandidato2 = parseFloat(prompt("Ingrese los votos obtenidos por el segundo candidato:"));
// const ganador = "El candidato ganador es:";
// const empate = "El resultado es un empate";

// if(votosCandidato1 > votosCandidato2){
//     console.log(ganador + " el primer candidato")
//     alert(ganador + " el primer candidato")
// }else if(votosCandidato1 < votosCandidato2){
//     console.log(ganador + " el segundo candidato")
//     alert(ganador + " el segundo candidato")
// }else{
//     console.log(empate)
//     alert(empate)
// }

// const votosRojo = parseFloat(prompt("Cuántos votos para el partido rojo?"));
//  const votosAzul = parseFloat(prompt("Cuántos votos para el partido azul?"));

//   if (!isNaN(votosAzul) && !isNaN(votosRojo)) {//devol. tru si no es "NaN"
//     let ganador = 0;
//     if (votosAzul > votosRojo) {
//       ganador = "Azul";
//     } else if (votosRojo > votosAzul) {
//       ganador = "Rojo";
//     }
//     if (ganador) {
//       alert(`El ganador es ${ganador}`);
//     } else {
//       alert("Es un empate!");
//     }
//   } else {
//     alert("Valor ingresado no válido");
//   }

let candidato1 = parseFloat(prompt(`ingrese la cantidad del candidato 1`));
let candidato2 = parseFloat(prompt(`ingrese la cantidad del candidato 2`));
if(candidato1 > candidato2)
{
 alert(`gano el candidato 1`);
}
else{
if(candidato1 < candidato2)
 {
 alert(`gano el candidato 2`);
 }
 else
 {
 alert(`hay empate`);
 }
}
// //////////////////////////////////////////////

// // EJERCICIO 4: Inventario de Productos
// // Consigna: Solicitar nombre de un producto y cantidad disponible, avisar si hay stock suficiente.
// // 0

// //////////////////////////////////////////////

// // EJERCICIO 5: Partido de Fútbol
// // Consigna: Pedir goles de dos equipos y determinar quién ganó o si empataron.
// // 
