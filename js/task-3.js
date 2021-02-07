import images from './images.js';

const imagesListRef = document.querySelector('#gallery'); 
imagesListRef.insertAdjacentHTML('afterbegin',`<p>Gallery</p>`)

const createGalleryElement = (imageSource)=> {

  const imageRef = document.createElement('li');

  imageRef.insertAdjacentHTML('afterbegin', `<img src=${imageSource.url} alt=${imageSource.alt}/>`);

  imageRef.classList.add('img-align')

  return imageRef; 
}

const imagesSourceList = images.map(imageSource=>createGalleryElement(imageSource));

imagesListRef.append(...imagesSourceList)

imagesListRef.classList.add('gallery-align')
