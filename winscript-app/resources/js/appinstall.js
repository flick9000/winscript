function appsInstall() {
  // Define the base choco command
  const baseChoco = "choco install ";
  // Define the list of apps
  const appList = [
    // Browsers
    { id: "Chrome", url: "googlechrome" },
    { id: "Firefox", url: "firefox" },
    { id: "Brave", url: "brave" },
    { id: "Opera", url: "opera" },
    { id: "Vivaldi", url: "vivaldi" },
    { id: "ZenBrowser", url: "zen-browser" },
    { id: "LibreWolf", url: "librewolf" },
    { id: "Chromium", url: "chromium" },
    { id: "Ungoogled", url: "ungoogled-chromium" },
    { id: "Floorp", url: "floorp" },
    { id: "Tor", url: "tor-browser" },
    // Compression
    { id: "7Zip", url: "7zip" },
    { id: "PeaZip", url: "peazip" },
    { id: "WinRAR", url: "winrar" },
    { id: "NanaZip", url: "nanazip" },
    // Gaming
    { id: "Steam", url: "steam" },
    { id: "EpicGames", url: "epicgameslauncher" },
    { id: "EAApp", url: "ea-app" },
    { id: "Minecraft", url: "minecraft-launcher" },
    { id: "FaceIT", url: "faceit" },
    { id: "PlayNite", url: "playnite" },
    { id: "PrismLauncher", url: "prismlauncher" },
    { id: "BorderlessGaming", url: "borderlessgaming" },
    // Utilities
    { id: "1Password", url: "1password" },
    { id: "BitWarden", url: "bitwarden" },
    { id: "Everything", url: "everything" },
    { id: "QuickLook", url: "quicklook" },
    { id: "Shell", url: "nilesoft-shell" },
    { id: "FlowLauncher", url: "flow-launcher" },
    { id: "CCleaner", url: "ccleaner" },
    { id: "Revo", url: "revo-uninstaller" },
    { id: "TeamViewer", url: "teamviewer" },
    { id: "AnyDesk", url: "anydesk" },
    { id: "ImgBurn", url: "imgburn" },
    { id: "qBitTorrent", url: "qbittorrent" },
    { id: "BulkCrapUninstaller", url: "bulk-crap-uninstaller" },
    { id: "BulkRename", url: "bulkrenameutility" },
    { id: "qBitTorrent", url: "qbittorrent" },
    { id: "AutoHotKey", url: "hotkey" },
    { id: "Afterburner", url: "msiafterburner" },
    { id: "CPU-Z", url: "cpu-z" },
    { id: "GPU-Z", url: "gpu-z" },
    { id: "HWInfo", url: "hwinfo" },
    { id: "HWMonitor", url: "hwmonitor" },
    { id: "DDU", url: "ddu" },
    { id: "Rainmeter", url: "rainmeter" },
    { id: "StartAllBack", url: "startallback" },
    { id: "TransluscentTB", url: "translucenttb" },
    // Pro Tools
    { id: "ProtonVPN", url: "protonvpn" },
    { id: "MullvadVPN", url: "mullvad-app" },
    { id: "OpenVPN", url: "openvpn" },
    { id: "PuTTY", url: "putty" },
    { id: "SimpleWall", url: "simplewall" },
    { id: "WireShark", url: "wireshark" },
    { id: "WireGuard", url: "wireguard" },
    { id: "AdvancedIpScanner", url: "advanced-ip-scanner" },
    { id: "AngryIpScanner", url: "angryip" },
    // Microsoft Tools
    { id: "OneDrive", url: "onedrive" },
    { id: "PowerToys", url: "powertoys" },
    { id: "Autoruns", url: "autoruns" },
    { id: "WinTerminal", url: "microsoft-windows-terminal" },
    { id: "ProcessMonitor", url: "procmon" },
    { id: "Nuget", url: "nuget.commandline" },
    { id: "vcredist", url: "vcredist140" },
    // Media
    { id: "VLC", url: "vlc" },
    { id: "Blender", url: "blender" },
    { id: "GIMP", url: "gimp" },
    { id: "DarkTable", url: "darktable" },
    { id: "AIMP", url: "aimp" },
    { id: "iTunes", url: "itunes" },
    { id: "foobar2000", url: "foobar2000" },
    { id: "EqualizerAPO", url: "equalizerapo" },
    { id: "Audacity", url: "audacity" },
    { id: "Spotify", url: "spotify" },
    { id: "Spicetify", url: "spicetify-cli" },
    { id: "HandBrake", url: "handbrake" },
    { id: "MediaMonkey", url: "mediamonkey" },
    { id: "OBS", url: "obs-studio" },
    // Comunication
    { id: "Discord", url: "discord" },
    { id: "Zoom", url: "zoom" },
    { id: "Telegram", url: "telegram" },
    { id: "Whatsapp", url: "whatsapp" },
    { id: "Skype", url: "skype" },
    { id: "Teams", url: "microsoft-teams" },
    { id: "Slack", url: "slack" },
    { id: "Thunderbird", url: "thunderbird" },
    { id: "Signal", url: "signal" },
    // Imaging
    { id: "Blender", url: "blender" },
    { id: "Krita", url: "krita" },
    { id: "KdenLive", url: "kdenlive" },
    { id: "GIMP", url: "gimp" },
    { id: "InkScape", url: "inkscape" },
    { id: "ShareX", url: "sharex" },
    { id: "LightShot", url: "lightshot" },
    { id: "Greenshot", url: "greenshot" },
    // Documents
    { id: "AdobeReader", url: "adobereader" },
    { id: "LibreOffice", url: "libreoffice-fresh" },
    { id: "SumatraPDF", url: "sumatrapdf" },
    { id: "OpenOffice", url: "openoffice" },
    { id: "Obsidian", url: "obsidian" },
    { id: "simplenote", url: "simplenote" },
    { id: "Joplin", url: "joplin" },
    { id: "AFFiNE", url: "affine-client" },
    // Security
    { id: "MalwareBytes", url: "malwarebytes" },
    { id: "Avast", url: "avastfreeantivirus" },
    { id: "AVG", url: "avgantivirusfree" },
    // For Developers
    { id: "Git", url: "git" },
    { id: "GitHub", url: "github-desktop" },
    { id: "NodeJS", url: "nodejs" },
    { id: "Python3", url: "python3" },
    { id: "Java", url: "javaruntime" },
    { id: "NET48", url: "netfx-4.8" },
    { id: "NET8", url: "dotnet" },
    { id: "Notepad++", url: "notepadplusplus" },
    { id: "SublimeText", url: "sublimetext3" },
    { id: "Neovim", url: "neovim" },
    { id: "VSCode", url: "vscode" },
  ];

  // Get the checked checkboxes
  const urls = appList
    .filter((app) => {
      const element = document.getElementById(app.id);
      return element && element.checked;
    })
    .map((app) => app.url);

  // Create the final URL
  const finalURL = urls.join(" ");
  const command =
    urls.length > 0
      ? 'taskkill /f /im explorer.exe && start explorer.exe && start cmd /k "' +
        baseChoco +
        finalURL +
        ' -y"'
      : "";

  // Display the final URL in the div
  document.querySelector(".div-install").style.display =
    urls.length > 0 ? "block" : "none";
  document.querySelector(".chocolatey-container").style.display =
    urls.length > 0 ? "block" : "none";
  const commandDisplay = document.querySelector(".commandDisplay");
  commandDisplay.textContent = command;
  const installingApps = document.querySelector(".installingApps");
  installingApps.textContent = finalURL;
}

// Call the function
appsInstall();

// Select the "uncheck all" button
const uncheckAllButton = document.getElementById("uncheckAll");

// Add a 'click' event listener to the button
uncheckAllButton.addEventListener("click", () => {
  // Select all checkboxes with the attribute 'js-target=install'
  const checkboxes = document.querySelectorAll("[js-target=install]");

  // Iterate over the checkboxes and set their 'checked' property to false
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;

    // Dispatch a 'change' event for the checkbox
    const event = new Event("change");
    checkbox.dispatchEvent(event);
  });
});

// Add a 'DOMContentLoaded' event listener to the document
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("[js-target=install]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", appsInstall);
  });
});
