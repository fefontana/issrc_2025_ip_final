let modelos = [
    "Nokia 3210",
    "Motorola StarTAC",
    "Nokia 5110",
    "Ericsson T28",
    "Siemens S25",
    "Alcatel One Touch Easy",
    "Motorola MicroTAC",
    "Nokia 6110",
    "Ericsson GH688",
    "Panasonic GD90",
    "Nokia 1100",
    "Motorola V3"
];

let precios = [
    150,   // Nokia 3210
    300,   // Motorola StarTAC
    180,   // Nokia 5110
    250,   // Ericsson T28
    200,   // Siemens S25
    120,   // Alcatel One Touch Easy
    280,   // Motorola MicroTAC
    220,   // Nokia 6110
    160,   // Ericsson GH688
    230,   // Panasonic GD90
    100,   // Nokia 1100
    350    // Motorola V3 (valor retro estimado)
];

let stock = [
    8,   // Nokia 3210
    4,   // Motorola StarTAC
    10,  // Nokia 5110
    6,   // Ericsson T28
    5,   // Siemens S25
    12,  // Alcatel One Touch Easy
    3,   // Motorola MicroTAC
    7,   // Nokia 6110
    9,   // Ericsson GH688
    5,   // Panasonic GD90
    14,  // Nokia 1100
    6    // Motorola V3
];



function mostrarStock() {
    let mensaje = "Stock actual:\n\n";

    for (let i = 0; i < modelos.length; i++) {
        mensaje += modelos[i] +
            " / Precio: $" + precios[i] +
            " / Stock: " + stock[i] + "\n";
    }

    alert(mensaje); console.log(mensaje);
}

/*
Recibe un nombre de modelo como parámetro por ejemplo: buscarIndicePorModelo("Nokia 1100");
Recorre el array modelos con un bucle for y comparo cada elemento:
modelos[0], modelos[1], modelos[2], …
toLowerCase() para que la búsqueda NO dependa de mayúsculas/minúsculas.
(Ej.: "nokia 1100" == "NOKIA 1100")
Si encuentra una coincidencia → devuelve el índice.
Si modelos[10] contiene "Nokia 1100", entonces retorna 10, el cual es el indice del array para este valor
Si recorre todo el array y no lo encuentra hace return -1; esto indica: "El modelo no existe en la lista."
*/

function buscarIndicePorModelo(nombreModelo) {
    for (let i = 0; i < modelos.length; i++) {
        if (modelos[i].toLowerCase() === nombreModelo.toLowerCase()) {
            return i;
        }
    }
    return -1; // No encontrado
}

function registrarVenta() {
    let nombreModelo = prompt("Modelo a vender:");

    let indice = buscarIndicePorModelo(nombreModelo);

    if (indice === -1) {
        alert("Modelo inexistente");
        return;
    }

    let cantidad = parseInt(prompt("¿Cuántas unidades?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Entrada inválida.");
        return;
    }

    if (cantidad > stock[indice]) {
        alert("Imposible, no hay stock suficiente. Disponible: " + stock[indice]);
        return;
    }

    stock[indice] -= cantidad;
    // como la lista de celulares es fija no modifico el array de modelos
    // ni su precio por ahora
    // solo modifico su cantidad en stock, 0 seria que ya no hay pero no lo elimino del
    // array de modelos
    alert("Venta realizada ok. Stock actualizado de " + modelos[indice] + ": " + stock[indice]);
}

function stockTotal() {
    let total = 0;

    for (let i = 0; i < modelos.length; i++) {
        total += precios[i] * stock[i]; // basta el array de precios unitarios y cantidades
    }

    alert("Inventario - valor total: $" + total);
    console.log("Inventario - valor total: $" + total);
}

// MENÚ PRINCIPAL (obligatorio)

function menuPrincipal() {
    let opcion;

    do {
        opcion = prompt(
            "* * * TIENDA DE CELULARES COMPUMUNDO HIPERMEGARED * * *\n\n" +
            "[ 1 ] Stock\n" +
            "[ 2 ] Venta\n" +
            "[ 3 ] Total del stock\n" +
            "[ 4 ] Salir\n\n" +
            "Opción seleccionada:"
        );

        switch (opcion) {
            case "1":
                mostrarStock();
                break;

            case "2":
                registrarVenta();
                break;

            case "3":
                stockTotal();
                break;

            case "4":
                alert("Bye");
                break;

            default:
                alert("Opción inválida. Intente nuevamente.");
        }

    } while (opcion !== "4");
}

// Ejecutar el menú
menuPrincipal();