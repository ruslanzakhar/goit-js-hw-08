// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(`.gallery`);


// *створює картинки по шаблону
function createCardMarkup (galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<li><a class="gallery__item" href ="${original}">
        <img class ="gallery__img" src="${preview}"  
        alt="${description}"></a></li>`;
    }).join(` `);
    return 
}
// *додає створені картинки до галереї
const cardsMarkup = (createCardMarkup(galleryItems));
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);




const lightbox = new SimpleLightbox (`.gallery a`,{
	captionsData: `alt`,
    captionPosition: `bottom`,
    captionDelay: 250,
});