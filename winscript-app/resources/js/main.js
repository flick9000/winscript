function onWindowClose() {
    Neutralino.app.exit();
}

document.getElementById('downloadBtn').addEventListener('click', async function() {
    // Get the text content from the div
    var textContent = document.getElementById('code').innerText;

    try {
        // Get the TEMP directory path
        const tempDir = await Neutralino.os.getEnv('TEMP');
        var filePath = `${tempDir}/flickutility/winscript.bat`;

        // Create the directory if it doesn't exist
        Neutralino.os.execCommand('mkdir %temp%\\flickutility')

        // Write the file
        await Neutralino.filesystem.writeFile(filePath, textContent);

        // Open the file
        Neutralino.os.execCommand(`start ${filePath}`);
        
    } catch (err) {
        console.error('Error writing file: ', err);
        alert('Failed to write the file.');
    }
});

function showCard(cardClass) {
    document.getElementById("cards").style.display = "none";
    document.querySelector(`.card.${cardClass}`).style.display = "flex";
    // Store current card class
    currentCardClass = cardClass;
}

function showDebloat() {
    showCard('debloat');
}

function showPrivacy() {
    showCard('privacy');
}

function showPerformance() {
    showCard('performance');
}

function showMisc() {
    showCard('install');
}

function backButton() {
    if (currentCardClass) {
        document.querySelector(`.card.${currentCardClass}`).style.display = "none";
        document.getElementById("cards").style.display = "grid";
        // Reset the current card class
        currentCardClass = '';
    }
}

function uncheckAll() {
    checkboxItems.forEach(item => {
        document.getElementById(item.id).checked = false;
        handleUnchecked(item.type);
    });
}

document.getElementById('uncheckAll').addEventListener('click', function() {
    uncheckAll();
});

var basicIds = ['thirdparty', 'copilot', 'faxscan', 'iexplorer', 'wtelemetry', 'wsearchtelemetry', 'blockhosts', 'officetelemetry', 'appexperience', 'wfeedback', 'handwriting', 'clipboard', 'targetads', 'privacyconsent', 'cloudsync', 'wifisense', 'screenrecording', 'automap', 'activityfeed', 'voiceactivationaccess', 'locationaccess', 'accinfoaccess', 'motionaccess', 'trustedaccess', 'contactsaccess', 'calendaraccess', 'emailaccess', 'tasksaccess', 'radioaccess', 'systemaccess', 'cleantemp', 'ultimateperformance'];

document.getElementById('basicPreset').addEventListener('click', function() {
    uncheckAll();
    checkboxItems.forEach(item => {
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
    hljs.highlightAll()
});

var strictIds = ['thirdparty', 'copilot', 'faxscan', 'iexplorer', 'wtelemetry', 'wsearchtelemetry', 'blockhosts', 'officetelemetry', 'appexperience', 'wfeedback', 'handwriting', 'targetads', 'privacyconsent', 'cloudsync', 'wifisense', 'screenrecording', 'automap', 'activityfeed', 'voiceactivationaccess', 'locationaccess', 'accinfoaccess', 'callhistoryaccess', 'motionaccess', 'trustedaccess', 'contactsaccess', 'calendaraccess', 'emailaccess', 'tasksaccess', 'radioaccess', 'systemaccess', 'cleantemp', 'ultimateperformance', 'xbox', 'onedrive', 'widgets', 'wupdate', 'clipboard', 'nvidiatelemetry', 'vscodetelemetry', 'mediatelemetry', 'powershelltelemetry', 'ccleanertelemetry', 'googleupdates', 'adobeupdates', 'messagingaccess', 'notificationaccess', 'diagaccess', 'phoneaccess', 'lockscreencamera', 'manualservices', 'disablehibernation'];

document.getElementById('strictPreset').addEventListener('click', function() {
    uncheckAll();
    checkboxItems.forEach(item => {
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
    hljs.highlightAll()
});

// Initialize Neutralino
Neutralino.init();

// Register event listeners
Neutralino.events.on("windowClose", onWindowClose);