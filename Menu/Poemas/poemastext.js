window.addEventListener('load', function() {
    // Rutas a los archivos .txt
    var archivos = ['textos/text1.txt'];

    archivos.forEach(function(archivo, index) {
        var elementoContenido = document.getElementById('contenidoArchivo' + (index + 1));

        fetch(archivo)
            .then(function(response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('No se pudo cargar el archivo ' + archivo);
            })
            .then(function(data) {
                elementoContenido.textContent = data;
            })
            .catch(function(error) {
                elementoContenido.textContent = 'Error: ' + error.message;
            });
    });
});
