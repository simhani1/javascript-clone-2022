//document는 객체이다. 그 안에 html의 정보들이 들어있다.
//자바스크립트로 html항목들을 건드릴 수 있다는 것이다.

//document.title = "Hello from JS";

////html 요소에서 원하는 정보를 끌어오기
//document.getElementById("title");

// const title = document.getElementById("title");
// console.dir(title);
// title.innerText = "Got you";
// console.log(title.class);
// console.log(title.id);

////배열로 값을 반환
// const hellos = document.getElementsByClassName("h1");

// console.log(hellos);

////eventㅣistener 사용하기
const h1 = document.querySelector("div.hello:first-child h1");
// h1.style.color = "blue"; //javascript를 통해 h1의 style을 수정할 수 있음
console.dir(h1);

function handleTitleClick() {
  //console.log("title was clicked!");
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

h1.addEventListener("click", handleTitleClick); //click을 할 경우 함수를 실행
//h1.onClick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("offline", handleWindowOnline);
//test
