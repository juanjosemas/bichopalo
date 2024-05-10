document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de búsqueda
    let botonBuscar = document.getElementById("buscarBoton");
    let inputBuscar = document.getElementById("buscarInput");

    // Asociar la función buscar al evento de clic del botón "Buscar"
    botonBuscar.addEventListener("click", function() {
        buscar(inputBuscar.value.trim());
    });

    // Función para buscar la palabra ingresada en el input
    function buscar(inputText) {
        let conceptosU = document.querySelectorAll("#conceptos u"); // Obtener todos los elementos <u> dentro de la lista de conceptos
        let conceptosP = document.querySelectorAll("#conceptos p"); // Obtener todos los elementos <p> dentro de la lista de conceptos

        // Restaurar los colores originales antes de realizar una nueva búsqueda
        conceptosU.forEach(function(concepto) {
            concepto.style.color = ""; // Restaurar el color original del elemento <u>
        });

        conceptosP.forEach(function(concepto) {
            concepto.style.color = ""; // Restaurar el color original del elemento <p>
        });

        // Verificar si se ingresó texto en el input
        if (inputText === "") {
            return; // No hacer nada si no hay texto ingresado
        }

        // Iterar sobre cada elemento <u> para buscar la palabra ingresada
        conceptosU.forEach(function(concepto) {
            let textoConcepto = concepto.textContent.toLowerCase(); // Obtener el texto dentro del elemento <u> en minúsculas
            let expresion = new RegExp('\\b' + inputText.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g'); // Expresión regular para buscar la palabra completa
            if (expresion.test(textoConcepto)) { // Verificar si la palabra coincide con la búsqueda
                concepto.style.color = "red"; // Resaltar la palabra encontrada en rojo
                setTimeout(function() {
                    concepto.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Desplazar la página hacia la palabra encontrada
                }, 300);
            }
        });

        // Iterar sobre cada elemento <p> para buscar la palabra ingresada
        conceptosP.forEach(function(concepto) {
            let textoConcepto = concepto.textContent.toLowerCase(); // Obtener el texto dentro del elemento <p> en minúsculas
            let expresion = new RegExp('\\b' + inputText.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g'); // Expresión regular para buscar la palabra completa
            if (expresion.test(textoConcepto)) { // Verificar si la palabra coincide con la búsqueda
                concepto.style.color = "blue"; // Resaltar la palabra encontrada en azul
                setTimeout(function() {
                    concepto.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Desplazar la página hacia la palabra encontrada
                }, 300);
            }
        });

        // Limpiar el contenido del input después de buscar
        inputBuscar.value = "";
    }
});