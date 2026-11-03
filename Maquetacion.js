    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    const botonTema = document.getElementById('btn-tema');
    
    botonTema.addEventListener('click', function() {
      document.body.classList.toggle('modo-oscuro');
      
      if (document.body.classList.contains('modo-oscuro')) {
        botonTema.textContent = '☀️ Tema';
      } else {
        botonTema.textContent = '🌙 Tema';
      }
    });