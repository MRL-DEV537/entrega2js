function buscarUsersPanelAdmin() {
    // Declarar un arreglo de nombres de usuarios
    let users = ["León", "Julian", "Roberto", "Martin"];

    // Usar un bucle para permitir múltiples intentos hasta encontrar el cliente
    let clienteEncontrado = false;

    while (!clienteEncontrado) {
        // Pedir al usuario que ingrese un nombre
        let cliente = prompt("Busca el usuario que gustes");

        // Buscar el nombre del cliente en el arreglo
        let buscarCliente = users.find(function(nombre) {
            return nombre === cliente;
        });

        // Comprobar si se encontró el cliente y mostrar un mensaje correspondiente
        if (buscarCliente) {
            alert("Cliente encontrado: " + buscarCliente);
            clienteEncontrado = true;
        } else {
            alert("Cliente no encontrado. Inténtalo de nuevo.");
        }
    }
}

// Llama a la función para iniciar la búsqueda
buscarUsersPanelAdmin();