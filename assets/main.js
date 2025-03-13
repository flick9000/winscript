function responsiveNav() {
  const navbar = document.getElementById("navbar");

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.fade-in').forEach((element) => {
  observer.observe(element);
});
