const images = ["brno.png", "kutnahora.png", "praha.png"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
bgimage.src = `background/${chosenImage}`;
document.body.appendChild(bgimage);