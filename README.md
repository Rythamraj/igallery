# Ex.07 Design of Interactive Image Gallery
## Date:26-12-25

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
image.html

<html>
<head>
    <title>Image Gallery</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>

    <div class="head">Car Image Gallery</div>

    <div class="main-content">
        <div class="gallery-container">
            <img id="galleryImage" class="gallery-image" src="porsche.jpg">
            <div id="caption" class="caption"></div>
            <div class="gallery-buttons">
                <button onclick="prevImage()">Previous</button>
                <button onclick="nextImage()">Next</button>
            </div>
        </div>
    </div>

    <div class="footer-banner">
        RYTHAM RAJ(25012528)
    </div>
</body>
</html>

style.css

body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: bisque
}

.head {
    background-color: rgb(225, 225, 121);
    color: rgb(18, 74, 88);
    text-align: center;
    padding: 15px;
    font-size: 42px;
    font-weight: bold;
    text-shadow: 3px 3px 0px bisque;
}

.main-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gallery-container {
    background: rgb(18, 74, 88);
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px;
    border: 8px solid black;
}

.gallery-image {
    width: 400px;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
    border: 3px solid black;
}

.caption {
    margin: 20px;
    font-size: 18px;
    font-weight: 500;
}

.gallery-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

button {
    padding: 10px 25px;
    cursor: pointer;
    border: none;
    border-radius: 7px;
    background-color: blanchedalmond;
    color: rgb(36, 50, 40);
    font-size: 18px;
    transition: background 0.4s;
}

button:hover {
    background-color: rgb(232, 198, 157);
}

.footer-banner {
    background-color: rgb(101, 155, 132);
    color: whitesmoke;
    text-align: center;
    padding: 10px;
    font-size: 24px;
    font-weight: 100px;
}

script.js

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

```

## OUTPUT:
![alt text](<Screenshot 2025-12-26 232819.png>)
![alt text](<Screenshot 2025-12-26 232830.png>)
![alt text](<Screenshot 2025-12-26 232845.png>)
![alt text](<Screenshot 2025-12-26 232909.png>)
![alt text](<Screenshot 2025-12-26 232928.png>)
![alt text](<Screenshot 2025-12-26 233004.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
