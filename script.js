let menu = document.getElementById("menu");
let exitMenu = document.getElementById("exit--button");
let navbarItems = document.getElementsByClassName("navbar__items");
let switcherBall = document.getElementsByClassName("button--switcher__ball");
let switcher = document.getElementById("button--switcher");
let switcherBulan = document.getElementById("switcher--bulan");
let switcherTahun = document.getElementById("switcher--tahun");
let isSwitchActive = false;

menu.addEventListener("click", toggleNavbar);
exitMenu.addEventListener("click", toggleNavbar);
switcher.addEventListener("click", toggleSwitcher);

function toggleNavbar() {
  if (navbarItems[0].classList.contains("active")) {
    navbarItems[0].classList.remove("active");
  } else {
    navbarItems[0].classList.add("active");
  }
}

function toggleSwitcher() {
  if (!isSwitchActive) {
    switcherBall[0].classList.add("active--switcher");
    switcherTahun.classList.add("active--switcher-text");
    switcherBulan.classList.remove("active--switcher-text");
    isSwitchActive = true;
  } else {
    switcherBulan.classList.add("active--switcher-text");
    switcherTahun.classList.remove("active--switcher-text");
    isSwitchActive = false;
    switcherBall[0].classList.remove("active--switcher");
  }
}
