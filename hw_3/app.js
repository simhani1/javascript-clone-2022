const inputForm = document.querySelector(".inputNumberForm");
const inputNumber = document.querySelector(".inputNumber");
const guessNumber = document.querySelector(".guessNumber");
const resultMessage = document.getElementById("result__detail");
const resultWinOrLose = document.getElementById("result__WinOrLose");

function numberSubmit(event) {
  //브라우저의 기본 동작을 제어
  event.preventDefault();
  //문자열을 10진수로 변환
  const numberLimit = parseInt(inputNumber.value, 10);
  const numberGuessed = parseInt(guessNumber.value, 10);
  //0부터 입력받은 숫자 중 랜덤으로 추출
  //Math.random(): 0부터 1까지의 숫자 중 랜덤으로 추출
  //Math.ceil(): 올림
  let randomNumber = Math.ceil(Math.random() * numberLimit);
  randomGame(randomNumber, numberGuessed);
}

//랜덤으로 봅은 숫자와 추측한 숫자가 같을 경우 승리
function randomGame(randomNumber, numberGuessed) {
  if (randomNumber === numberGuessed) {
    resultMessage.innerHTML = `You choose: ${numberGuessed}, the machine choose: ${randomNumber}`;
    resultWinOrLose.innerHTML = "You won!";
  } else {
    resultMessage.innerHTML = `You choose: ${numberGuessed}, the machine choose: ${randomNumber}`;
    resultWinOrLose.innerHTML = "You lost!";
  }
}

//submit이 발생할 경우 numberSubmit함수 실행
inputForm.addEventListener("submit", numberSubmit);
