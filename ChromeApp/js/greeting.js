const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기한다
const USERNAME_KEY = "username";

//자바스크립트에서 함수 호출 시 인자로 event object를 전달한다
//event object에는 방금 일어난 event에 대한 다양한 정보들을 담고 있다
function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작을 막아주는 함수, 새로고침을 막을 수 있다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //API를 이용해 값을 저장
  paintGreetings(username);
}

function paintGreetings(name) {
  //백틱(물결 옆) 기호를 사용하여 문자열과 변수를 함께 사용할 수 있다
  greeting.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//로그인을 하는 순간 savedusername은 null값이 아니게 된다
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
