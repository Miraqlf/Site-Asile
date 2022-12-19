let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".link");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
