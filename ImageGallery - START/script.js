const btn = document.querySelector('button');
const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');

const imageNames = ['start', 'car', 'mountains', 'stars', 'sunset', 'water'];

btn.addEventListener('click',() => {
    const btnClass = btn.getAttribute('class');

    if (btnClass === 'grayscale') {
        btn.setAttribute('class', 'noGrayscale');
        btn.innerHTML='OFF';

        displayedImage.style.filter = 'grayscale(100%)';
    } else {
        btn.setAttribute('class', 'grayscale');
        btn.innerHTML='ON';

        displayedImage.style.filter = 'none';
    }
    
});

for (let currImage of imageNames){
    const newImage = document.createElement("img");
    newImage.setAttribute('src', `./images/${currImage}.jpg`);
    thumbBar.appendChild(newImage);
}