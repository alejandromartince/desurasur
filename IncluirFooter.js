document.addEventListener('DOMContentLoaded', function () {
    // Función para incluir el header
    fetch('Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});