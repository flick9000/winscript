function responsiveNav() {
  const navbar = document.getElementById("navbar");
  const mainElement = document.querySelector("main");

  if (!navbar.classList.contains("responsive")) {
    navbar.classList.add("responsive");
    adjustMargin(mainElement);
  } else {
    navbar.classList.remove("responsive");
    mainElement.style.marginTop = "0";
  }
}

function adjustMargin(mainElement) {
  const screenHeight = window.innerHeight;
  let marginTop = "0";

  const marginValues = [
    { max: 700, value: "125px" },
    { max: 800, value: "100px" },
    { max: 850, value: "75px" },
    { max: 950, value: "50px" },
    { max: 1000, value: "75px" },
    { max: 1100, value: "50px" },
    { max: 1150, value: "25px" },
    { max: 1200, value: "10px" },
  ];

  for (const { max, value } of marginValues) {
    if (screenHeight <= max) {
      marginTop = value;
      break;
    }
  }

  mainElement.style.marginTop = marginTop;
  // mainElement.style.marginTop = "25px";
}

// window.addEventListener("resize", () => responsiveNav());

// Get the modal
let modal = document.getElementById("privacy-modal");
let privacyItem = document.getElementById("privacy-item");
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
privacyItem.onclick = function () {
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
