const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgList = [
    'altPic1.jpg',
    'altPic2.JPG',
    'altPic3.JPG',
    'altPic4.JPG',
    'altPic5.JPG'
]
/* Declaring the alternative text for each image file */
const altObj = {
    'altPic1.jpg': 'Fantasy character',
    'altPic2.JPG': 'Desert gear',
    'altPic3.JPG': 'Sonic Character inspo Echidna',
    'altPic4.JPG': 'Warped Thinking',
    'altPic5.JPG': 'Crystal Stasis'
}
/* Looping through images */
for (let i = 0; i < imgList.length; i++) {    
    const element = imgList[i];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "./images/" + element);
    newImage.setAttribute('alt', altObj[element]);
    thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
})