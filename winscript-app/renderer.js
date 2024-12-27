const os = require('os');
const { ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');


const computerName = os.userInfo().username;
const hostName = os.hostname();

document.getElementById('username').innerHTML = computerName;
document.getElementById('hostname').innerHTML = hostName;

const si = require('systeminformation');

si.baseboard().then(data => {
    document.getElementById('pc-mobo').innerHTML = data.model;
});

si.cpu().then(data => {
    document.getElementById('pc-cpu').innerHTML = data.brand;
});

si.diskLayout().then(data => {
    document.getElementById('pc-storage').innerHTML = Math.round(data[0].size / Math.pow(1024, 3)) + " GB";
});

si.mem().then(data => {
    document.getElementById('pc-ram').innerHTML = Math.round(data.total / Math.pow(1024, 3)) + " GB";
});

si.graphics().then(data => {
    document.getElementById('pc-gpu').innerHTML = data.controllers[0].model;
});

si.osInfo().then(data => {
    document.getElementById('pc-os').innerHTML = data.distro;
});

document.getElementById("runBtn").addEventListener("click", async function () {
    let textContent = document.getElementById("code").innerText;

    try {
        // Get the TEMP directory path
        const tempDir = os.tmpdir();
        const dirPath = path.join(tempDir, 'winscript');
        const filePath = path.join(dirPath, 'winscript.bat');

        // Create the directory if it doesn't exist
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Write the file
        fs.writeFileSync(filePath, textContent, 'utf-8');

        // Open the file
        const { exec } = require('child_process');
        exec(`start ${filePath}`, (err) => {
            if (err) {
                console.error("Error opening file: ", err);
                alert("Failed to open the file.");
            }
        });
    } catch (err) {
        console.error("Error writing file: ", err);
        alert("Failed to write the file.");
    }
});
