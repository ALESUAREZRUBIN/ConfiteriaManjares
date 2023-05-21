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


document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('Por favor ingresa tu nombre');
    return;
  }
  var email = document.getElementById('email').value;
  if( email.length ==0) {
    alert('Escribe un email');
    return;
  }
  var telefono = document.getElementById('telefono').value;
  if (telefono.length ==0) {
    alert('Escribe tu telefono');
    return;
  }
  var mensaje = document.getElementById('mensaje').value;
  if( mensaje.length ==0) {
    alert('Dejanos tu mensaje');
    return;}

  this.submit();
}

document.addEventListener('DOMContentLoaded', () => {
  const imagenGatoContainer = document.getElementById('imagenGato');

  function fetchImagenGato() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(data => {
        const imageUrl = data[0].url;
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imagenGatoContainer.appendChild(imageElement);
      })
      .catch(error => {
        console.log('Error al obtener la imagen del gato:', error);
      });
  }

  // Obtener una imagen al cargar la página
  fetchImagenGato();
});
