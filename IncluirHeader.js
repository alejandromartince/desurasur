document.addEventListener('DOMContentLoaded', function () {
    // Función para incluir el header
    fetch('Header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
});