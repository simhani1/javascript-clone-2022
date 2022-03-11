// //if-else문 사용하기
// const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(h1);

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);
// //하지만 자바스크립트로 css부분을 건드리는 것이 그렇게 좋지만은 못하다

//자바스크립트로 css 건드리기
const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const clickedClass = "clicked"; //클래스명을 변수로 저장함으로서 실수를 방지
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass); //className을 공백으로 만들어 버리기
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

function handleTitleClick() {
  const clickedClass = "clicked";
  //리스트에 클래스명이 존재하는지 확인해서 추가/삭제 기능을 함
  //토글 함수로 위에 있는 코드의 역할을 간단하게 적용시킬 수 있음
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);
