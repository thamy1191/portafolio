const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");

// Establecer el número de diapositivas que se muestran a la vez
const slidesToShow = 3;

// Establecer la dirección de la transición
const direction = "right";

// Agregar controles para avanzar y retroceder entre las diapositivas
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// Iniciar el carrusel
slides.style.transform = `translate3d(${direction} 0, 0)`

const imageUploader = document.getElementById('imageUploader')
const subirButton = document.getElementById('subir')
const logoutButton = document.getElementById('logout')
const galeria = document.getElementById('galeria')
const titlulos = document.getElementById('titulos')
const tituloImagen = document.getElementById('tituloImagen')
// evento del clic para subir la imagen
subirButton.addEventListener('click', function (){
  const archivo = imageUploader.files[0];
  let usuarioLoggeado = localStorage.getItem("email");
  if(archivo){
    // leer archivo como base 64
    const reader = new FileReader();
    reader.onload = function(e) {
    // crear elemento de imagen
    const imagen = document.createElement('img');
    imagen.src = e.target.result;
    data = {
      titulo: tituloImagen.value,
      img: e.target.result, // esto es la imagen como base 64
      email: usuarioLoggeado
    }
    localStorage.setItem("imagen", JSON.stringify(data))
    imagen.classList.add('imagen')
    // agregar imagen a la galeria
    galeria.appendChild(imagen);
  
   
  }
  reader.readAsDataURL(archivo);
  }
})
// evento de clic para cerrar sesion
logoutButton.addEventListener('click', function(){
  // limpiargaleria
 localStorage.removeItem('email')
})
// funcion para hacer zoom
function hacerZoom(src) {
  const zoomImagen = document.createElement('img');
  zoomImagen.src = src;
  zoomImagen.classList.add('zoomed')
  // crear overlay para el fondo
  const overlay = document.createElement('div')
  overlay.classList.add('overlay')
  // agregar la imagen y el overlay al body del html
  document.body.appendChild(zoomImagen)
  document.body.appendChild(overlay)
// evento de clic en la imagen para cerrar el zoom
  zoomImagen.addEventListener('click', function(){
    document.body.removeChild(zoomImagen)
    document.body.removeChild(overlay)
  })
}






 