console.log('ciao');

// - Creo una varibile array con le immaggini
//   - inserisco le immaggini nell' array
const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',  
];

console.log(images)
// - creo uan variabile in cui richiamo un elemento dal DOM ('gallery')
const galleryDOMElement = document.querySelector('.gallery');
console.log(galleryDOMElement);

// - creo un ciclo for per inserire le immaggini nel DOM:
for ( i = 0; i < images.length; i++) {
//   - creo una variabile src 
const currentSrc = images[i];
console.log(currentSrc);

//   - creo una varibile htmlstring 'div' in cui inserirò la classe 'image' e la varibile 'src' all' interno della stringa   
const htmlString = `<div class="image"> <img src="${currentSrc}"> </div>`;
console.log(htmlString);

//   - stampo nel dom la stringa prima creata
galleryDOMElement.innerHTML += htmlString;
console.log(galleryDOMElement);
}


// - richiamo dal DOM gli elementi con classe 'image'
const imageDOMElement = document.querySelectorAll('.image');
// - creo una variabile in cui do la classe 'active solo alla prima immagine

// const firstImageDOMElement = imageDOMElement[0];
// firstImageDOMElement.classList.add('active')
let imgActive = 0

imageDOMElement[imgActive].classList.add('active')
console.log(imageDOMElement)

// - al click dell utente sulle freccie cambierà immagine
//   - creo due variabile previous e next
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')
console.log(next, previous)

//   - creo una variabile eventlistner per next
next.addEventListener ('click', function() {
    imageDOMElement[imgActive].classList.remove('active')

    imgActive++;


    if (imgActive === images.length -1) {
        imgActive = 0
        
    }
    // if ( imgActive === images.length-1) {
    //     imgActive = 0
       
    // } else {
    //     imgActive++;
    // }
    imageDOMElement[imgActive].classList.add('active')
});

//   - creo una variabile eventlistner per previous
previous.addEventListener ('click', function() {
    console.log('click')
    imageDOMElement[imgActive].classList.remove('active')


    if (imgActive == 0){
        imgActive = images.length - 1 ;
    } else {
        imgActive--;
    }
    
    imageDOMElement[imgActive].classList.add('active')
    console.log(imageDOMElement)
});