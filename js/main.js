function responsiveNav() {
  const navbar = document.getElementById("navbar");
  const mainElement = document.querySelector("main");

  if (!navbar.classList.contains("responsive")) {
    navbar.classList.add("responsive");
    document.body.style.overflow = "hidden";
  } else {
    navbar.classList.remove("responsive");
    document.body.style.overflow = "visible";
  }
}

// window.addEventListener("resize", () => responsiveNav());

// Get the modal
let modal = document.getElementById("privacy-modal");
let privacyItem = document.getElementById("privacy-item");
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
privacyItem.onclick = function () {
  const navbar = document.getElementById("navbar");
  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
  }
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
spanClose.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
