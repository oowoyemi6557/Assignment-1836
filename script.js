let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fas fa-times");
  navbar.classList.toggle("active");
};

//navbar.onclick.toggle('active');
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
