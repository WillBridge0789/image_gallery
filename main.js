const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgList = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
]
/* Declaring the alternative text for each image file */
const altObj = {
    'pic1.jpg': 'Close up of a human eye',
    'pic2.jpg': 'Rock formation',
    'pic3.jpg': 'Purple and White Flowers',
    'pic4.jpg': 'Heiroglyphics',
    'pic5.jpg': 'Monarch Butterfly'
}
/* Looping through images */
for (let i = 0; i < imgList.length; i++) {
    const element = imgList[i];
    const newImage = document.createElement('img');
    newImage.innerText = element;
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', i);
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
