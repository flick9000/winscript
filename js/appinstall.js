function appsInstall() {
    const baseChoco = "choco install ";
    const appList = [
        // Browsers
        { id: "Chrome", url: "googlechrome" },
        { id: "Firefox", url: "firefox" },
        { id: "Brave", url: "brave" },
        { id: "Opera", url: "opera" },
        { id: "7Zip", url: "7zip" },
        { id: "PeaZip", url: "peazip" },
        { id: "WinRAR", url: "winrar" },
        // Gaming
        { id: "Steam", url: "steam" },
        { id: "EpicGames", url: "epicgameslauncher" },
        { id: "EAApp", url: "ea-app" },
        { id: "Minecraft", url: "minecraft-launcher" },
        // Utilities
        { id: "Everything", url: "everything" },
        { id: "CCleaner", url: "ccleaner" },
        { id: "Revo", url: "revo-uninstaller" },
        { id: "TeamViewer", url: "teamviewer" },
        { id: "ImgBurn", url: "imgburn" },
        { id: "qBitTorrent", url: "qbittorrent" },
        // Media
        { id: "VLC", url: "vlc" },
        { id: "AIMP", url: "aimp" },
        { id: "iTunes", url: "itunes" },
        { id: "foobar2000", url: "foobar2000" },
        { id: "Audacity", url: "audacity" },
        { id: "Spotify", url: "spotify" },
        { id: "HandBrake", url: "handbrake" },
        { id: "MediaMonkey", url: "mediamonkey" },
        // Comunication
        { id: "Discord", url: "discord" },
        { id: "Zoom", url: "zoom" },
        { id: "Skype", url: "skype" },
        { id: "Thunderbird", url: "thunderbird" },
        // Imaging
        { id: "Blender", url: "blender" },
        { id: "Krita", url: "krita" },
        { id: "GIMP", url: "gimp" },
        { id: "InkScape", url: "inkscape" },
        { id: "ShareX", url: "sharex" },
        { id: "Greenshot", url: "greenshot" },
        // Documents
        { id: "LibreOffice", url: "libreoffice-fresh" },
        { id: "SumatraPDF", url: "sumatrapdf" },
        { id: "OpenOffice", url: "openoffice" },
        // Security
        { id: "MalwareBytes", url: "malwarebytes" },
        { id: "Avast", url: "avastfreeantivirus" },
        { id: "AVG", url: "avgantivirusfree" },
        // For Developers
        { id: "Python3", url: "python3" },
        { id: "Java", url: "javaruntime" },
        { id: "NET48", url: "netfx-4.8" },
        { id: "NET8", url: "dotnet" },
        { id: "Notepad++", url: "notepadplusplus" },
        { id: "VSCode", url: "vscode" },
    ];
    
    const urls = appList
    .filter(app => {
        const element = document.getElementById(app.id);
        return element && element.checked;
    })
    .map(app => app.url);
    
    const finalURL = urls.join(" ");
    const command = urls.length > 0
    ? 'start cmd /k choco feature enable -n allowGlobalConfirmation && ' + baseChoco + finalURL
    : '';
    
    
    // Display the command in the div
    document.querySelector('.div-install').style.display = (urls.length > 0) ? 'block' : 'none';
    document.querySelector('.chocolatey-container').style.display = (urls.length > 0) ? 'block' : 'none';
    const commandDisplay = document.querySelector('.commandDisplay');
    commandDisplay.textContent = command;
    const installingApps = document.querySelector('.installingApps');
    installingApps.textContent = finalURL;
}

appsInstall()

// Select the "uncheck all" button
const uncheckAllButton = document.getElementById('uncheckAll');

// Add a 'click' event listener to the button
uncheckAllButton.addEventListener('click', () => {
    // Select all checkboxes with the attribute 'js-target=install'
    const checkboxes = document.querySelectorAll('[js-target=install]');
    
    // Iterate over the checkboxes and set their 'checked' property to false
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        
        // Dispatch a 'change' event for the checkbox
        const event = new Event('change');
        checkbox.dispatchEvent(event);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('[js-target=install]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', appsInstall);
    });
});
