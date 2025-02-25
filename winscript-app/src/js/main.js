import { writeTextFile, readTextFile, mkdir } from '@tauri-apps/plugin-fs';
import { tempDir, join } from '@tauri-apps/api/path';
import { Command } from '@tauri-apps/plugin-shell';
import { app } from '@tauri-apps/api'
import { version } from '@tauri-apps/plugin-os';
import { getCurrentWindow } from "@tauri-apps/api/window";
import { ask, save, open } from '@tauri-apps/plugin-dialog';
import { hostname } from '@tauri-apps/plugin-os';
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';

// Apply Mica if OS = Windows 11
function applyMica() {
  const osVersion = version();
  const buildNumber = osVersion.split('.')[2];

  function isWindows11() {
    return buildNumber >= 22000;
  }

  if (isWindows11()) {
    getCurrentWindow().setEffects({ effects: ["mica"] });
  } else {
    document.body.style.backgroundColor = "var(--background)";
  }
}

applyMica();

// Show window manually on startup (remove this when mica bug at startup is fixed)
getCurrentWindow().show();

// Prevent context menu
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
})

// Display hostname
hostname().then(nameHost => {
  document.getElementById("hostname").textContent = nameHost;
}).catch(error => {
  document.getElementById("hostname").textContent = "github.com/flick9000";
});

// Check for updates
async function checkForUpdates() {
  const update = await check();
  if (!update) {
    console.log('No update available');
  }
  if (update) {
    console.log(`found update ${update.version} from ${update.date} with notes ${update.body}`);

    const updateAsk = await ask("A new update is available. Do you want to update?", { 
      title: 'Update Available', 
      kind: 'info',
      okLabel: 'Update',
      cancelLabel: 'Later'
    });

    if (updateAsk === true) {
      await update.downloadAndInstall();
      await relaunch();
    } else {
      console.log('Update skipped');
    }
  }
}

checkForUpdates();

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

  if (!navbar.classList.contains("responsive")) {
    navbar.classList.add("responsive");
    document.body.style.overflow = "hidden";
  } else {
    navbar.classList.remove("responsive");
    document.body.style.overflow = "visible";
  }
  
}

const tabs = document.querySelectorAll(".sidebar-entry");
const contents = document.querySelectorAll(".tab-content");
const title = document.getElementById("content-header"); // Select the header element for updating

// Set only the first tab and its corresponding content as active
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
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    contents[index].classList.add("active");

    title.textContent = tab.textContent;
  });
});

// Import & Export
const importBtn = document.getElementById('importBtn');
const exportBtn = document.getElementById('exportBtn');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

exportBtn.addEventListener('click', async () => {
  let settings = {};
  checkboxes.forEach((checkbox) => {
    settings[checkbox.id] = checkbox.checked;
  })

  // Open file dialog
  try {
    const filePath = await save({
    filters: [
      {
        name: 'JSON',
        extensions: ['json'],
      },
    ],
  });

  // Write the settings to the file
  if (filePath) {
    await writeTextFile(filePath, JSON.stringify(settings, null, 2));
    console.log('File saved successfully');
  }
  } catch (error) {
    console.error('Error saving file:', error);
  }
});


importBtn.addEventListener('click', async () => {
  // Open file dialog
  try {
    const filePath = await open({
      filters: [{
        name: 'JSON',
        extensions: ['json']
      }]
    });
    
    // Read settings from file
    if (filePath) {
      const contents = await readTextFile(filePath);
      
      const settings = JSON.parse(contents);
      checkboxes.forEach((checkbox) => {
        checkbox.checked = settings[checkbox.id];
        checkbox.dispatchEvent(new Event("change"));
      });
    }
  } catch (error) {
    console.error('Error importing settings:', error);
  }
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

// OneDrive Checkbox
const onedriveCheckbox = document.getElementById('onedrive');
let onedriveChanging = false

onedriveCheckbox.addEventListener('click', async (e) => {
  if (onedriveChanging) {
    onedriveChanging = false
    return
  };
  
  onedriveCheckbox.checked = false

  if (!onedriveChanging)  {
    const onedriveAsk = await ask("Uninstalling OneDrive will delete all of your OneDrive files, make sure to backup if you wish to proceed. Do you want to continue?", { 
      title: 'Uninstall OneDrive',
      type: 'question',
      });

    if (onedriveAsk) {
      onedriveChanging = true
      onedriveCheckbox.checked = true
      onedriveCheckbox.dispatchEvent(new Event('change'))
    }
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
  var textContent = document.getElementById("code").innerText;
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
  if (!restoreCheckbox.checked) {
      let restoreAsk = await ask("Do you want to create a restore point?", { title: 'Restore Point' });
      console.log("Restore Point: " + restoreAsk);
      
      if (restoreAsk === true) {
        document.querySelector('.restore-container').style.display = 'block';
      } else {
        document.querySelector('.restore-container').style.display = 'none';
      }
  }

  let textContent = document.getElementById("code").innerText;

  try {
      // Get the TEMP directory path
      const tmpDir = await tempDir();
      const dirPath = await join(tmpDir, 'winscript');
      const filePath = await join(dirPath, 'winscript.bat');

      // Create the directory
      await mkdir(dirPath, { recursive: true });

      // Write the script
      await writeTextFile(filePath, textContent);

      // Execute the script
      const command = new Command('cmd', ['/c', 'start', 'cmd', '/k', filePath]);
      command.spawn()
          .then(() => console.log('Script executed successfully'))
          .catch(error => console.error('Error executing script:', error));
  } catch (error) {
      console.error('Error:', error);
  }
});
