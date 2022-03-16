const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  //정수를 문자열로 형변환 후 padStart 함수를 활용해 항상 두자리 수로 시간 출력
  //padStart(자릿수, 자릿수보다 적을 경우 앞에 추가할 문자열)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

////입력한 시간이 지난 후 수행
// setTimeout(sayHello, 5000);

//interval 활용하기
//setInterval(함수명, 반복할 주기(ms 단위))
getClock(); //처음에 1초 지연되는 것을 방지하기 위해 함수를 최초 한번 실행
setInterval(getClock, 1000);
