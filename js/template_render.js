import {photos} from './data.js';

const photoList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoFragment = document.createDocumentFragment();

photos.forEach(({url, description, likes, comments}) => {
    const newThumbnail = photoTemplate.cloneNode(true);
    newThumbnail.querySelector('.picture__img').src = url;
    newThumbnail.querySelector('.picture__img').alt = description;
    newThumbnail.querySelector('.picture__likes').textContent = likes;
    newThumbnail.querySelector('.picture__comments').textContent = comments.length;
    photoFragment.appendChild(newThumbnail);
    }
);
photoList.appendChild(photoFragment);
