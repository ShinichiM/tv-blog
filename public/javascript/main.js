async function showMobileMenu(event) {
  var state = document.querySelector("#mobile-accordian").getAttribute("state");
  if (state === "off") {
    document.querySelector("#mobile-accordian").setAttribute("state", "on");
    document.querySelector("#mobile-menu-2").setAttribute("class", "visible");
  } else {
    document.querySelector("#mobile-accordian").setAttribute("state", "off");
    document.querySelector("#mobile-menu-2").setAttribute("class", "hidden");
  }
}

document
  .querySelector("#mobile-accordian")
  .addEventListener("click", showMobileMenu);
