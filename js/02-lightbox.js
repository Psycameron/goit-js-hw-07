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
