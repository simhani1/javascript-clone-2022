//출력해야하는 태그 별명
const clockTitle = document.querySelector(".js-clock");

function printClockTitle() {
  let today__date = new Date();
  const christmas__date = new Date("December 25, 2022 00:00:00");
  let leftDay = christmas__date - today__date;
  let leftDay__days = String(Math.floor(leftDay / (1000 * 60 * 60 * 24)));
  let leftDay__hours = String(
    Math.floor((leftDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  let leftDay__minutes = String(
    Math.floor((leftDay % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  let leftDay__seconds = String(
    Math.floor((leftDay % (1000 * 60)) / 1000)
  ).padStart(2, "0");
  clockTitle.innerText = `${leftDay__days}d ${leftDay__hours}h ${leftDay__minutes}m ${leftDay__seconds}s`;
}

printClockTitle();
setInterval(printClockTitle, 1000);
