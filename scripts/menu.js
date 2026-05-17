const menuItems = document.getElementById("menuItems");
const burger = document.getElementById("burger");

function clickMenu() {
  const menuItems = document.getElementById("menuItems");

  if (menuItems.style.width == "50%") {
    menuItems.style.width = "0";
  } else {
    menuItems.style.width = "50%";
  }
}

function biggerScreen() {
  if (window.innerWidth >= 992) {
    menuItems.style.width = "50%";
  } else {
    menuItems.style.width = "0";
  }
}

biggerScreen();

const selectedLink = document.querySelectorAll("#menuItems a");

selectedLink.forEach(function (link) {
  link.addEventListener("click", function () {
    menuItems.style.width = "0";
  });
});

document.addEventListener("click", function (event) {
  if (!menuItems.contains(event.target) && !burger.contains(event.target)) {
    menuItems.style.width = "0";
  }
});
