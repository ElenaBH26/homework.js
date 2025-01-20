let currentImage = './assets/img/IMG_6246.JPG'; 
const firstImage = './assets/img/IMG_6246.JPG'; 
const nextImage = './assets/img/IMG_6247.JPG';
let showingFirstImage = true; 

function switchImage() {
    const imgElement = document.getElementById('sea-img');

    
    imgElement.src = showingFirstImage ? nextImage : firstImage;

 
    showingFirstImage = !showingFirstImage;
}


document.getElementById('prev-btn').addEventListener('click', function() {
    showingFirstImage = !showingFirstImage; 
    switchImage();
});


document.getElementById('next-btn').addEventListener('click', function() {
    switchImage();
});



function learning ()
{
    return 'Я учу JavaScript!';
}
console.log(learning());
