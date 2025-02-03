document.addEventListener("DOMContentLoaded", function () {

    // Botón para que suba de forma suave hacía arriba
    const buttonArriba = document.querySelector(".boton_arriba");
    buttonArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
