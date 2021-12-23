// Change code below this line

import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const listGalleryNode = document.querySelector('.gallery');

const galleryAdd = () => {
    const galleryReturn = galleryItems
        .map(({ preview, original, description }) => {
            return `
           <div class="gallery__item">
                         <a class="gallery__link" href="${original}">
                            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/> </a>
                    </div>
                    
                    `;
        })
        .join('');

    listGalleryNode.insertAdjacentHTML('afterbegin', galleryReturn);
};
galleryAdd();

// listGalleryNode.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (e.target.tagName !== "IMG") return;
console.log(SimpleLightbox);
const lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionsData: 'alt',
    captionDelay: 250,
});
// lightbox.options.captionsData = "alt";
// lightbox.options.captionDelay = 250;

// listGalleryNode.removeEventListener("click", e);
// });