document.getElementById("downloadBtn").addEventListener("click", function () {
  // Get the text content from the div
  var textContent = document.getElementById("code").innerText;
  // Create a Blob with the text content
  var blob = new Blob([textContent], { type: "text/plain" });
  // Create a download link
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "winscript.bat";
  // Append the link to the body
  document.body.appendChild(link);
  // Programmatically click the download link
  link.click();
  // Remove the link from the document
  document.body.removeChild(link);
});

function showCard(cardClass) {
  // Hide and show the correct card
  document.getElementById("cards").style.display = "none";
  document.querySelector(`.card.${cardClass}`).style.display = "flex";
  // Store current card class
  currentCardClass = cardClass;
}

function showDebloat() {
  showCard("debloat");
}

function showPrivacy() {
  showCard("privacy");
}

function showPerformance() {
  showCard("performance");
}

function showInstall() {
  showCard("install");
}

// Back button
function backButton() {
  if (currentCardClass) {
    document.querySelector(`.card.${currentCardClass}`).style.display = "none";
    document.getElementById("cards").style.display = "grid";
    // Reset the current card class
    currentCardClass = "";
  }
}

// Uncheck all checkboxes
function uncheckAll() {
  checkboxItems.forEach((item) => {
    document.getElementById(item.id).checked = false;
    handleUnchecked(item.type);
  });
}
document.getElementById("uncheckAll").addEventListener("click", function () {
  uncheckAll();
});

// Presets
let basicIds = [
  "thirdparty",
  "consumerfeatures",
  "copilot",
  "faxscan",
  "iexplorer",
  "wtelemetry",
  "wsearchtelemetry",
  "blockhosts",
  "officetelemetry",
  "appexperience",
  "wfeedback",
  "handwriting",
  "clipboard",
  "targetads",
  "privacyconsent",
  "cloudsync",
  "wifisense",
  "screenrecording",
  "automap",
  "activityfeed",
  "voiceactivationaccess",
  "locationaccess",
  "accinfoaccess",
  "motionaccess",
  "trustedaccess",
  "contactsaccess",
  "calendaraccess",
  "emailaccess",
  "tasksaccess",
  "radioaccess",
  "systemaccess",
  "cleantemp",
  "cleanmgr",
  "ultimateperformance",
  "filextensions",
  "stickykeys",
  "taskbarwidgets",
  "widgets",
];
let strictIds = [
  "thirdparty",
  "copilot",
  "consumerfeatures",
  "faxscan",
  "iexplorer",
  "wtelemetry",
  "wsearchtelemetry",
  "blockhosts",
  "officetelemetry",
  "appexperience",
  "wfeedback",
  "handwriting",
  "targetads",
  "privacyconsent",
  "cloudsync",
  "wifisense",
  "screenrecording",
  "automap",
  "activityfeed",
  "voiceactivationaccess",
  "locationaccess",
  "accinfoaccess",
  "callhistoryaccess",
  "motionaccess",
  "trustedaccess",
  "contactsaccess",
  "calendaraccess",
  "emailaccess",
  "tasksaccess",
  "radioaccess",
  "systemaccess",
  "cleantemp",
  "cleanmgr",
  "ultimateperformance",
  "xbox",
  "onedrive",
  "widgets",
  "wupdate",
  "clipboard",
  "nvidiatelemetry",
  "vscodetelemetry",
  "mediatelemetry",
  "powershelltelemetry",
  "ccleanertelemetry",
  "googleupdates",
  "adobeupdates",
  "messagingaccess",
  "notificationaccess",
  "diagaccess",
  "phoneaccess",
  "lockscreencamera",
  "manualservices",
  "filextensions",
  "stickykeys",
  "taskbarwidgets",
];

document.getElementById("basicPreset").addEventListener("click", function () {
  uncheckAll();
  checkboxItems.forEach((item) => {
    // Check if the current item's id is in the list of specific ids
    if (basicIds.includes(item.id)) {
      var checkbox = document.getElementById(item.id);
      if (checkbox.checked) {
        checkbox.checked = false;
        handleUnchecked(item.type);
      } else {
        checkbox.checked = true;
        handleCheckedNoHighlight(item.type);
      }
    }
  });
  hljs.highlightAll();
});

document.getElementById("strictPreset").addEventListener("click", function () {
  uncheckAll();
  checkboxItems.forEach((item) => {
    // Check if the current item's id is in the list of specific ids
    if (strictIds.includes(item.id)) {
      var checkbox = document.getElementById(item.id);
      if (checkbox.checked) {
        checkbox.checked = false;
        handleUnchecked(item.type);
      } else {
        checkbox.checked = true;
        handleCheckedNoHighlight(item.type);
      }
    }
  });
  hljs.highlightAll();
});

// Restore button
let isFunction1 = true;
document.getElementById("restoreBtn").addEventListener("click", function () {
  if (isFunction1) {
    document.querySelector(".restore-container").style.display = "block";
  } else {
    document.querySelector(".restore-container").style.display = "none";
  }
  isFunction1 = !isFunction1;
});

// Copy to clipboard button
document.getElementById("copyBtn").addEventListener("click", function () {
  // Get the text content from the div
  var textContent = document.getElementById("code").innerText;
  // Copy the text content to the clipboard
  navigator.clipboard.writeText(textContent).then(
    function () {
      alert("Script copied to clipboard");
    },
    function (err) {
      alert("Error copying text to clipboard: ", err);
    }
  );
});
