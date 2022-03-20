const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");

//이미지 파일 추가
bgImage.src = `img/${chosenImage}`;

body.appendChild(bgImage);
