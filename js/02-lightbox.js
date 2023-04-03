import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery')

function createGallery(galleryItems) {
    return galleryItems.reduce((acc, img) => (acc + `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}"/></a>`)
, '' )
}
const result = createGallery(galleryItems);
containerGallery.insertAdjacentHTML("beforeend", result);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {
});

console.log(galleryItems);
