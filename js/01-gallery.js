import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onClickEvent);

// console.log(createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    }).join('');    
}

function onClickEvent(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const imageLink = e.target.dataset.source;
    const imageAlt = e.target.dataset.alt;
    const imageToShow = `<img src="${imageLink}", alt="${imageAlt}">`;

    console.log(imageLink);

    const instance = basicLightbox.create(imageToShow);

    instance.show();

    galleryContainer.addEventListener('keydown', escapeClick);

    function escapeClick(e) {
        if (e.key === 'Escape') {
            instance.close();
            galleryContainer.removeEventListener('keydown', escapeClick);            
        }
        console.log(e.key);
    }
}
    

