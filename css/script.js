document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de búsqueda
    var botonBuscar = document.getElementById("buscarBoton");
    var inputBuscar = document.getElementById("buscarInput");

    // Asociar la función buscar al evento de clic del botón "Buscar"
    botonBuscar.addEventListener("click", function() {
        buscar(inputBuscar.value.trim());
    });

    // Función para buscar la palabra ingresada en el input
    function buscar(inputText) {
        var conceptos = document.querySelectorAll("#conceptos u"); // Obtener todos los elementos <u> dentro de la lista de conceptos

        // Verificar si se ingresó texto en el input
        if (inputText === "") {
            return; // No hacer nada si no hay texto ingresado
        }

        // Iterar sobre cada elemento <u> para buscar la palabra ingresada
        var encontradoIndex = -1;
        conceptos.forEach(function(concepto, index) {
            var textoConcepto = concepto.textContent.toLowerCase(); // Obtener el texto dentro del elemento <u> en minúsculas
            if (textoConcepto.includes(inputText.toLowerCase())) { // Verificar si el texto ingresado se encuentra dentro del texto del concepto
                encontradoIndex = index;
            }
        });

        // Si la palabra no se encontró en ningún concepto, mostrar un mensaje de alerta
        if (encontradoIndex === -1) {
            alert("La palabra no se encontró en la lista de conceptos.");
            return;
        }

        // Limpiar el contenido del input
        inputBuscar.value = "";

        // Desplazar la página hacia el elemento que contiene la palabra buscada después de un breve retraso
        setTimeout(function() {
            conceptos[encontradoIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
});