document.getElementById('downloadBtn').addEventListener('click', function() {
    // Get the text content from the div
    var textContent = document.getElementById('code').innerText;

    // Create a Blob with the text content
    var blob = new Blob([textContent], { type: 'text/plain' });

    // Create a download link
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'content.bat';

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the download link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
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

document.getElementById('uncheckAll').addEventListener('click', function() {
    checkboxItems.forEach(item => {
        document.getElementById(item.id).checked = false;
        handleUnchecked(item.type);
    });
});

var basicIds = ['thirdparty', 'copilot', 'faxscan', 'iexplorer', 'wtelemetry', 'wsearchtelemetry', 'blockhosts', 'officetelemetry', 'appexperience', 'wfeedback', 'handwriting', 'clipboard', 'targetads', 'privacyconsent', 'cloudsync', 'wifisense', 'screenrecording', 'automap', 'activityfeed', 'voiceactivationaccess', 'locationaccess', 'accinfoaccess', 'motionaccess', 'trustedaccess', 'contactsaccess', 'calendaraccess', 'emailaccess', 'tasksaccess', 'radioaccess', 'systemaccess', 'cleantemp', 'ultimateperformance'];

document.getElementById('basicPreset').addEventListener('click', function() {
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

var strictIds = ['thirdparty', 'copilot', 'faxscan', 'iexplorer', 'wtelemetry', 'wsearchtelemetry', 'blockhosts', 'officetelemetry', 'appexperience', 'wfeedback', 'handwriting', 'targetads', 'privacyconsent', 'cloudsync', 'wifisense', 'screenrecording', 'automap', 'activityfeed', 'voiceactivationaccess', 'locationaccess', 'accinfoaccess', 'motionaccess', 'trustedaccess', 'contactsaccess', 'calendaraccess', 'emailaccess', 'tasksaccess', 'radioaccess', 'systemaccess', 'cleantemp', 'ultimateperformance', 'xbox', 'onedrive', 'widgets', 'wupdate', 'clipboard', 'nvidiatelemetry', 'vscodetelemetry', 'mediatelemetry', 'powershelltelemetry', 'ccleanertelemetry', 'googleupdates', 'adobeupdates', 'messagingaccess', 'notificationaccess', 'diagaccess', 'phoneaccess', 'lockscreencamera', 'manualservices', 'disablehibernation'];

document.getElementById('strictPreset').addEventListener('click', function() {
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