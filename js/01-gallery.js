import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery')

function createGallery(galleryItems) {
    return galleryItems.reduce((acc, img) => (acc + `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img
    class="gallery__image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"
    />
    </a>
</div>`)
, '' )
}
const result = createGallery(galleryItems);
containerGallery.insertAdjacentHTML("beforeend", result);


function openImage(e) {
    e.preventDefault();
    if (e.target.classList.contains('gallery__image')) {
        const modal = basicLightbox.create(
            `<img src="${e.target.dataset.source}" width='800' height='600'/>`,
            {
                onShow: () => window.addEventListener('keydown', onPressKeyESC),
                onClose: () => window.removeEventListener('keydown', onPressKeyESC),
            }
        );
        modal.show();
    
        function onPressKeyESC(e) {
            if (e.code === 'Escape') {
                modal.close();
                // window.removeEventListener('keydown', onPressKeyESC)
            }
        }
    }
}

containerGallery.addEventListener('click', openImage);
// console.log(galleryItems);