const gallery = [
    { src: "porsche.jpg", caption: "PORSCHE" },
    { src: "Audi.jpg", caption: "AUDI" },
    { src: "BMW M4.jpg", caption: "BMW" },
    { src: "Ferrari.jpg", caption: "FERRARI" },
    { src: "Lamborghini.jpg",caption:"LAMBORGHINI"},
    { src: "defender.jpg",caption:"DEFENDER"},
];

let index = 0;

function updateGallery() {
    document.getElementById("galleryImage").src = gallery[index].src;
    document.getElementById("caption").textContent = gallery[index].caption;
}

function nextImage() {
    index++;
    if (index >= gallery.length) {
        index = 0;
    }
    updateGallery();
}

function prevImage() {
    index--;
    if (index < 0) {
        index = gallery.length - 1;
    }
    updateGallery();
}