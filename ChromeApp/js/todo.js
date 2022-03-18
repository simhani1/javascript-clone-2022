const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//toDo 리스트를 로컬 저장소에 보관하기위한 배열
const toDos = [];

//로컬 저장소에 todo 리스트를 저장하기
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

//몇번째 버튼을 눌렀는지 알기 위해 event 인자를 추가
function deleteToDo(event) {
  //console.dir(event.target.parentElement.innerText);
  //target: 클릭된 HTML element
  //parentElement: 클릭된 HTML element의 부모 element
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "👌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo); //toDos 배열에 리스트 저장
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
