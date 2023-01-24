import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createImageGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createImageGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
        </div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }

  const urlImage = event.target.dataset.source;
  const altModalImage = event.target.alt;

  let instance = basicLightbox.create(
    `<img src="${urlImage}" alt="${altModalImage}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
