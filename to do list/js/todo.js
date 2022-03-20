const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//toDo 리스트를 로컬 저장소에 보관하기위한 배열
const TODOS_KEY = "todos";
let toDos = [];

//로컬 저장소에 todo 리스트를 저장하기
function saveToDos() {
  //배열에 원소들을 최신화
  //stringify: 문자열로 바꿔버린다
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//몇번째 버튼을 눌렀는지 알기 위해 event 인자를 추가
function deleteToDo(event) {
  //console.dir(event.target.parentElement.innerText);
  //target: 클릭된 HTML element
  //parentElement: 클릭된 HTML element의 부모 element
  const li = event.target.parentElement;
  li.remove();
  //삭제한 리스트를 제외한 나머지 리스트들을 배열에 새로 반영
  //li.id는 문자열이기 때문에 정수로 형변환 후 id와 비교해야한다
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); //삭제가 된 후 배열을 최신화
}

//object를 인자로 전달받음
function paintToDo(newTodo) {
  const li = document.createElement("li");
  //리스트의 각 항목의 id번호를 리스트 태그의 id로 저장
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  //항목들을 구분하기 위해 내용과 id를 object로 함께 저장
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //랜덤숫자를 주는 역할
  };
  //toDos 배열에 리스트 저장
  toDos.push(newTodoObj);
  //html에 id를 text와 함께 작성하기 위해 object를 전달
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//localStorage에서 배열로 문자열을 데이터로 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

//localStorage가 비어있을 경우 처리할 조건문
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //문자열을 실제로 활용가능한 타입으로 변환
  //바로 배열의 원소들을 가져와서 활용이 가능하다 ( arrow function)
  //또는 우너소들을 다른 함수의 인자로 전달해서 활용할 수도 있다
  //toDos 배열에 원소가 들어있을 경우 새로고침을 하더라도 배열에 todo리스트가 저장된다
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
