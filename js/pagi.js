const carousel = document.querySelector(".carousel");
const slides = carousel.querySelector(".slides");

// Establecer el número de diapositivas que se muestran a la vez
const slidesToShow = 3;

// Establecer la dirección de la transición
const direction = "right";

// Agregar controles para avanzar y retroceder entre las diapositivas
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

nextButton.addEventListener("click", () => {
  // Avanzar una diapositiva
  slides.style.transform = `translate3d(${direction} ${slidesToShow * 200}px, 0)`
});

prevButton.addEventListener("click", () => {
  // Retroceder una diapositiva
  slides.style.transform = `translate3d(${direction} -${slidesToShow * 200}px, 0)`
});

// Iniciar el carrusel
slides.style.transform = `translate3d(${direction} 0, 0)`