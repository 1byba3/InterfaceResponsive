// Seleccionamos el botón del Hero
const btnExplorar = document.getElementById('btn-explorar');

// Agregamos un evento de 'click' (Interactividad requerida)
btnExplorar.addEventListener('click', function() {
    
    // Alerta de bienvenida
    alert("¡Excelente elección! Preparando tu viaje por El Salvador...");
    
    // Desplazamiento suave hacia la sección de galería
    const seccionGaleria = document.getElementById('galeria');
    seccionGaleria.scrollIntoView({ behavior: 'smooth' });
    
});