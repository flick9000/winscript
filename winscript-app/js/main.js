function responsiveNav() {
  const navbar = document.getElementById("sidebar");
  const menuIcon = document.querySelector(".fa-solid.fa-bars-staggered");
  const markIcon = document.querySelector(".fa-solid.fa-xmark");

  if (!navbar.classList.contains("responsive")) {
    navbar.classList.add("responsive");
    menuIcon.style.display = "none";
    markIcon.style.display = "flex";

    document.body.style.overflow = "hidden";
  } else {
    navbar.classList.remove("responsive");
    menuIcon.style.display = "flex";
    markIcon.style.display = "none";
    
    document.body.style.overflow = "visible";
  }
}

// Select all tab buttons and content elements
const tabs = document.querySelectorAll(".sidebar-entry");
const contents = document.querySelectorAll(".tab-content");
const title = document.getElementById("content-header"); // Select the header element for updating

// Initialize: Set only the first tab and its corresponding content as active
if (tabs.length > 0 && contents.length > 0) {
  tabs[0].classList.add("active");
  contents[0].classList.add("active");
  title.textContent = tabs[0].textContent || "WinScript"; // Update header with the first tab's text
}

// Remove 'active' from all other content divs except the first
contents.forEach((content, index) => {
  if (index !== 0) {
    content.classList.remove("active");
  }
});

// Add click event to each tab button
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs and contents
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Add 'active' class to clicked tab and corresponding content
    tab.classList.add("active");
    contents[index].classList.add("active");

    // Update the header text to match the clicked tab
    title.textContent = tab.textContent;
  });
});

// MAS Checkbox
const masCheckbox = document.getElementById('installmas');
masCheckbox.addEventListener('change', () => {
  if (masCheckbox.checked) {
    document.querySelector('.mas-container').style.display = 'block';
  } else {
    document.querySelector('.mas-container').style.display = 'none';
  }
});

// Restore Point Checkbox
const restoreCheckbox = document.getElementById('restorepoint');
restoreCheckbox.addEventListener('change', () => {
  if (restoreCheckbox.checked) {
    document.querySelector('.restore-container').style.display = 'block';
  } else {
    document.querySelector('.restore-container').style.display = 'none';
  }
});

// Copy to clipboard button
document.getElementById("copyBtn").addEventListener("click", function () {
  // Get the text content from the div
  var textContent = document.getElementById("code").innerText;
  // Copy the text content to the clipboard
  navigator.clipboard.writeText(textContent);
});

// Run script button
document.getElementById("runBtn").addEventListener("click", function () {
  // Get the text content from the div
  var textContent = document.getElementById("code").innerText;
  // Run the text content as a script
  eval(textContent);
});

// Update the indicator text when the checkbox is changed
document.querySelectorAll('.checkbox-wrapper').forEach(wrapper => {
  const checkbox = wrapper.querySelector('input[type="checkbox"]');
  const indicator = wrapper.querySelector('.indicator');

  checkbox.addEventListener('change', () => {
    indicator.textContent = checkbox.checked ? 'On' : 'Off';
  });
});