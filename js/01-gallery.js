import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMurkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryContainerClick);

galleryContainer.insertAdjacentHTML('beforeend', cardsMurkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map((
        { description, original, preview }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
  }).join("");  
}
function onGalleryContainerClick(e) { 
  e.preventDefault();
  const isGalleryImage = e.target.classList.contains('gallery__image');
  console.log(isGalleryImage);
  if (!isGalleryImage) {
    return;
  } 
  // if (e.target.nodeName !== 'IMG') {
  //   return;
  // }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

instance.show()
}



