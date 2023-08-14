let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
<<<<<<< HEAD
  menu.classList.toggle("fa-times");
=======
  menu.classList.toggle("fas fa-times");
>>>>>>> 13f86b84b4e3d962a67aed437514412b390c743c
  navbar.classList.toggle("active");
};

//navbar.onclick.toggle('active');
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
<<<<<<< HEAD

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};
=======
};
>>>>>>> 13f86b84b4e3d962a67aed437514412b390c743c
