const mainScreen = document.querySelector("body");

function handleWindowResize() {
  let windowWidth = window.innerWidth;
  if (windowWidth >= 1000) {
    mainScreen.classList.remove("midActive");
    mainScreen.classList.add("endActive");
  } else if (700 <= windowWidth && windowWidth < 1000) {
    mainScreen.classList.remove("startActive");
    mainScreen.classList.remove("endActive");
    mainScreen.classList.add("midActive");
  } else {
    mainScreen.classList.remove("midActive");
    mainScreen.classList.add("startActive");
  }
}

window.addEventListener("resize", handleWindowResize);
