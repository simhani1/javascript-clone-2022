const images = ["background_1.jpg", "background_2.jpg", "background_3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//이미지 태그 만들기
const bgImage = document.createElement("img");
//이미지 파일 추가
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//
