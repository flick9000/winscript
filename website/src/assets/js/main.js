document.querySelectorAll(".fa-solid").forEach((icon) => {
  icon.addEventListener("click", () => {
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
  });
});

const tabs = document.querySelectorAll(".sidebar-entry");
const contents = document.querySelectorAll(".tab-content");
const title = document.getElementById("content-header");

// Set only the first tab and its corresponding content as active
if (tabs.length > 0 && contents.length > 0) {
  tabs[0].classList.add("active");
  contents[0].classList.add("active");
  title.textContent = tabs[0].textContent || "WinScript"; // Update header with the first tab's text
}

// Remove 'active' from all other content divs
contents.forEach((content, index) => {
  if (index !== 0) {
    content.classList.remove("active");
  }
});

// Add click event to each tab button
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    tab.classList.add("active");
    contents[index].classList.add("active");

    title.textContent = tab.textContent;
  });
});

// MAS Checkbox
const masCheckbox = document.getElementById("installmas");
masCheckbox.addEventListener("change", () => {
  if (masCheckbox.checked) {
    document.querySelector(".mas-container").style.display = "block";
  } else {
    document.querySelector(".mas-container").style.display = "none";
  }
});

// Restore Point Checkbox
const restoreCheckbox = document.getElementById("restorepoint");
restoreCheckbox.addEventListener("change", () => {
  if (restoreCheckbox.checked) {
    document.querySelector(".restore-container").style.display = "block";
  } else {
    document.querySelector(".restore-container").style.display = "none";
  }
});

// App Search Bar
document.getElementById("searchBar").addEventListener("input", () => {
  const searchValue = document.getElementById("searchBar").value.toLowerCase();
  const detailsElements = document.querySelectorAll("#install-tab details");

  detailsElements.forEach((details) => {
    const entries = [...details.querySelectorAll(".content-entry")];
    const summary = details.querySelector("summary");

    let hasMatch = false;

    entries.forEach((entry) => {
      if (!entry.isSameNode(summary)) {
        const isMatch = entry.textContent.toLowerCase().includes(searchValue);
        entry.style.display = isMatch ? "" : "none";
        hasMatch ||= isMatch;
      }
    });

    if (!searchValue) {
      details.style.display = "";
      details.open = false;
      entries.forEach((entry) => (entry.style.display = ""));
    } else {
      details.style.display = hasMatch ? "" : "none";
      details.open = hasMatch;
    }
  });
});

const importBtn = document.getElementById("importBtn");
const exportBtn = document.getElementById("exportBtn");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

exportBtn.addEventListener("click", () => {
  let settings = {};
  checkboxes.forEach((checkbox) => {
    settings[checkbox.id] = checkbox.checked;
  });

  const fileContent = JSON.stringify(settings, null, 2);

  const blob = new Blob([fileContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = "settings.json";
  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(url);

  console.log("File saved successfully");
});

importBtn.addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".json";

  fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const settings = JSON.parse(e.target.result);
        checkboxes.forEach((checkbox) => {
          checkbox.checked = settings[checkbox.id];
          checkbox.dispatchEvent(new Event("change"));
        });
      } catch (error) {
        console.error("Error parsing settings:", error);
      }
    };

    reader.readAsText(file);
  });

  fileInput.click();
});

// Copy to clipboard button
document.getElementById("copyBtn").addEventListener("click", function () {
  var textContent = document.getElementById("code").innerText;
  navigator.clipboard.writeText(textContent);
});

// Update the indicator text
document.querySelectorAll(".checkbox-wrapper").forEach((wrapper) => {
  const checkbox = wrapper.querySelector('input[type="checkbox"]');
  const radio = wrapper.querySelector('input[type="radio"]');
  const indicator = wrapper.querySelector(".indicator");

  if (checkbox) {
    checkbox.addEventListener("change", () => {
      indicator.textContent = checkbox.checked ? "On" : "Off";
    });
  }

  if (radio) {
    radio.addEventListener("change", () => {
      const radioName = radio.getAttribute("name");
      document.querySelectorAll(`input[type="radio"][name="${radioName}"]`).forEach((r) => {
        const parentWrapper = r.closest(".checkbox-wrapper");
        if (parentWrapper) {
          const ind = parentWrapper.querySelector(".indicator");
          if (ind) {
            ind.textContent = r.checked ? "On" : "Off";
          }
        }
      });
    });
  }
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const supportDialog = document.getElementById("supportDialog");
  const closeSupportDialog = document.getElementById("closeSupportDialog");

  var textContent = document.getElementById("code").innerText;

  // Convert LF to CRLF
  textContent = textContent.replace(/\n/g, "\r\n");

  var blob = new Blob([textContent], { type: "text/plain" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "winscript.bat";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  supportDialog.showModal();

  closeSupportDialog.addEventListener("click", () => {
    supportDialog.close();
  });
});
