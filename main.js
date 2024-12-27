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

const privacyDialog = document.getElementById("privacyDialog");
const openPrivacyDialog = document.getElementById("openPrivacyDialog");
const closePrivacyDialog = document.getElementById("closePrivacyDialog");

openPrivacyDialog.addEventListener("click", () => {
  privacyDialog.showModal();
})

closePrivacyDialog.addEventListener("click", () => {
  privacyDialog.close();
})

const startDialog = document.getElementById("startDialog");
const openStartDialog = document.getElementById("openStartDialog");
const closeStartDialog = document.getElementById("closeStartDialog");

openStartDialog.addEventListener("click", () => {
  startDialog.showModal();
})

closeStartDialog.addEventListener("click", () => {
  startDialog.close();
})



// Get the modal
let modal = document.getElementById("privacy-modal");
let privacyItem = document.getElementById("privacy-item");
let spanClose = document.getElementById("privacyClose");

// When the user clicks on the button, open the modal
privacyItem.onclick = function () {
  const navbar = document.getElementById("navbar");
  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
  }
  modal.style.display = "flex";
  document.body.style.overflow = "visible";
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

let startModal = document.getElementById("start-modal");
let startItem = document.getElementById("start-item");
let startSpanClose = document.getElementById("startClose");


// When the user clicks on the button, open the modal
startItem.onclick = function () {
  const navbar = document.getElementById("navbar");
  if (navbar.classList.contains("responsive")) {
    navbar.classList.remove("responsive");
  }
  startModal.style.display = "flex";
  document.body.style.overflow = "visible";
};

// When the user clicks on <span> (x), close the modal
startSpanClose.onclick = function () {
  startModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    startModal.style.display = "none";
  }
};
