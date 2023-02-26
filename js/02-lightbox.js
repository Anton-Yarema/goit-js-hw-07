import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMurkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.addEventListener("click", onGalleryContainerClick);

galleryContainer.insertAdjacentHTML("beforeend", cardsMurkup);

 var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
      <li>
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      </li>  
        `;
    })
    .join("");
}
function onGalleryContainerClick(e) {
  e.preventDefault();
  const isGalleryImage = e.target.classList.contains("gallery__image");
   if (!isGalleryImage) {
    return;
  }
  // if (e.target.nodeName !== 'IMG') {
  //   return;
  // }

}

galleryContainer.addEventListener("keydown", (e) => { 
   instance.close();
});
