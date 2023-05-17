document.addEventListener('DOMContentLoaded', function() {
  const carruseles = document.querySelectorAll('.carrusel-fotos');

  carruseles.forEach(function(carruselFotos) {
    function moverCarrusel() {
      const primerElemento = carruselFotos.firstElementChild;
      carruselFotos.appendChild(primerElemento);
    }

    setInterval(moverCarrusel, 2000);
  });
});

