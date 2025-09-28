document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  const galeriaContainer = document.querySelector(".galeria-imagenes");

  for (let i = 0; i < 16; i++) {
    let imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/webp/${i + 1}.webp`;
    imagen.alt = "Imagen Galeria";
    imagen.loading = "lazy";
    imagen.classList.add("galeria-imagen")
    galeriaContainer.appendChild(imagen);
  }
  console.log("Desde crear galeria");
}
