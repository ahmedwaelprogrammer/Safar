const menuBTN = document.querySelector(".menu-bar");
const bar = document.querySelectorAll(".bar");
const menuNav = document.querySelector(".menu-nav");

//    MENU BTN CLICK MANAGE
menuBTN.addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    // console.log(bar[i]);
    if (i != 1) {
      bar[i].classList.toggle("delet");
    }
    menuNav.classList.toggle("remove");
  }
});
