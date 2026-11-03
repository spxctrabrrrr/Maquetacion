// Código para abrir y cerrar el menú en móviles (ya lo tenías)
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');
    /* if (toggle) { ... si lo tienes en móvil, asegúrate de mantenerlo */

    // Nuevo código para el Modo Oscuro
    const botonTema = document.getElementById('btn-tema');
    
    botonTema.addEventListener('click', function() {
      // Esto le pone o le quita la clase 'modo-oscuro' al body
      document.body.classList.toggle('modo-oscuro');
      
      // Cambiar el icono del botón
      if (document.body.classList.contains('modo-oscuro')) {
        botonTema.textContent = '☀️ Tema';
      } else {
        botonTema.textContent = '🌙 Tema';
      }
    });