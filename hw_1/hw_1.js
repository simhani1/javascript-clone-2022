const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handleWindowResize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  handleContextMenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
