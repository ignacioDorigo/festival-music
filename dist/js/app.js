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
    imagen.classList.add("galeria-imagen");

    imagen.addEventListener("click", () => mostrarModal(i + 1));
    galeriaContainer.appendChild(imagen);
  }
}

function mostrarModal(numeroImg) {
  const galeria = document.querySelector("#galeria");
  const modal = document.createElement("DIV");
  modal.classList.add("modal-img");

  const imgModal = document.createElement("IMG");
  imgModal.src = `src/img/gallery/webp/${numeroImg}.webp`;
  imgModal.alt = "Imagen Galeria";
  imgModal.loading = "lazy";
  modal.appendChild(imgModal);

  const buttonModal = document.createElement("BUTTON");
  buttonModal.addEventListener("click", cerrarModal);
  buttonModal.textContent = "X";

  modal.appendChild(buttonModal);
  galeria.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal-img");
  modal.remove();
}
