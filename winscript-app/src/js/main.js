import { writeTextFile, mkdir, BaseDirectory } from '@tauri-apps/plugin-fs';
import { tempDir, appDataDir, join } from '@tauri-apps/api/path';
import { Command } from '@tauri-apps/plugin-shell';

import { app } from '@tauri-apps/api'

import { version } from '@tauri-apps/plugin-os';
import { getCurrentWindow } from "@tauri-apps/api/window";

import { ask } from '@tauri-apps/plugin-dialog';

import { hostname } from '@tauri-apps/plugin-os';

getCurrentWindow().show();

hostname().then(nameHost => {
  document.getElementById("hostname").textContent = nameHost;
}).catch(error => {
  console.error("Failed to get hostname:", error);
  document.getElementById("hostname").textContent = "github.com/flick9000";
});

// Prevent context menu
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
})

// Check if the OS is Windows 11
const osVersion = version();
const buildNumber = osVersion.split('.')[2];

function isWindows11() {
  return buildNumber >= 22000;
}

// Set Mica if the OS is Windows 11
if (isWindows11()) {
  getCurrentWindow().setEffects({ effects: ["mica"] });
} else {
  document.body.style.backgroundColor = "var(--background)";
}

// Display app version
async function displayVersion() {
  try {
      const version = await app.getVersion();
      document.getElementById('version').textContent = `${version}`;
  } catch (error) {
      document.getElementById('version').textContent = ``;
      console.error("Failed to get app version:", error);
  }
}

displayVersion();

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

// App Search Bar
document.getElementById('searchBar').addEventListener('input', () => {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const detailsElements = document.querySelectorAll('#install-tab details');

    detailsElements.forEach(details => {
        const entries = [...details.querySelectorAll('.content-entry')];
        const summary = details.querySelector('summary');

        let hasMatch = false;

        entries.forEach(entry => {
            if (!entry.isSameNode(summary)) {
                const isMatch = entry.textContent.toLowerCase().includes(searchValue);
                entry.style.display = isMatch ? '' : 'none';
                hasMatch ||= isMatch;
            }
        });

        if (!searchValue) {
            details.style.display = '';
            details.open = false;
            entries.forEach(entry => (entry.style.display = ''));
        } else {
            details.style.display = hasMatch ? '' : 'none';
            details.open = hasMatch;
        }
    });
});

// Copy to clipboard button
document.getElementById("copyBtn").addEventListener("click", function () {
  // Get the text content from the div
  var textContent = document.getElementById("code").innerText;
  // Copy the text content to the clipboard
  navigator.clipboard.writeText(textContent);
});

// Update the indicator text when the checkbox is changed
document.querySelectorAll('.checkbox-wrapper').forEach(wrapper => {
  const checkbox = wrapper.querySelector('input[type="checkbox"]');
  const indicator = wrapper.querySelector('.indicator');

  checkbox.addEventListener('change', () => {
    indicator.textContent = checkbox.checked ? 'On' : 'Off';
  });
});


document.getElementById("runBtn").addEventListener("click", async function () {

  // Ask for restore point
  let restoreAsk = await ask("Do you want to create a restore point?", { title: 'Restore Point' });
  console.log("Restore Point: " + restoreAsk);

  if (restoreAsk === true) {
    document.querySelector('.restore-container').style.display = 'block';
  } else {
    document.querySelector('.restore-container').style.display = 'none';
  }

  let textContent = document.getElementById("code").innerText;

  try {
      // Get the TEMP directory path (Tauri-specific app directory)
      const tmpDir = await tempDir();
      const dirPath = await join(tmpDir, 'winscript');
      const filePath = await join(dirPath, 'winscript.bat');

      // Create the directory if it doesn't exist
      await mkdir(dirPath, { recursive: true });

    
      // Write the file
      await writeTextFile(filePath, textContent);


      // Open the file (Execute the script)
      const command = new Command('cmd', ['/c', 'start', 'cmd', '/k', filePath]);
      command.spawn()
          .then(() => console.log('Script executed successfully'))
          .catch(error => console.error('Error executing script:', error));
  } catch (error) {
      console.error('Error:', error);
  }
});
