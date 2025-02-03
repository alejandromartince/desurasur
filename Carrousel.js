document.addEventListener('DOMContentLoaded', function() {
    // Obtén todos los enlaces de las imágenes del carrusel
    const images = document.querySelectorAll('.seccionImagenes__contenedor a');
    const prevButton = document.getElementById('prevBoton');
    const nextButton = document.getElementById('nextBoton');

    let currentIndex = 0; // Índice de la imagen actual
    const imagesToShow = 4; // Número de imágenes a mostrar

    // Función para mostrar las imágenes actuales
    function showImages() {
        // Oculta todas las imágenes
        images.forEach((image, i) => {
            // Muestra solo las imágenes actuales
            image.style.display = (i >= currentIndex && i < currentIndex + imagesToShow) ? 'block' : 'none';
        });
        
        // Deshabilitar el botón siguiente si llegamos al final
        if (currentIndex + imagesToShow >= images.length) {
            nextButton.disabled = true; // Deshabilita el botón siguiente
        } else {
            nextButton.disabled = false; // Habilita el botón siguiente
        }

        // Deshabilitar el botón anterior si estamos en el inicio
        if (currentIndex === 0) {
            prevButton.disabled = true; // Deshabilita el botón anterior
        } else {
            prevButton.disabled = false; // Habilita el botón anterior
        }
    }

    // Muestra las imágenes iniciales al cargar
    showImages();

    // Evento para el botón anterior
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0; // Retrocede al índice anterior
        showImages();
    });

    // Evento para el botón siguiente
    nextButton.addEventListener('click', function() {
        if (currentIndex + imagesToShow < images.length) {
            currentIndex++; // Avanza al índice siguiente
            showImages();
        }
    });
});
