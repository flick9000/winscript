function appsInstall() {
  // List of apps
  const appList = [
    // Drivers
    { id: "Intel", url: "intel-dsa" },
    { id: "Ryzen", url: "amd-ryzen-chipset" },
    { id: "NVIDIA", url: "nvidia-display-driver" },
    // Browsers
    { id: "Chrome", url: "googlechrome" },
    { id: "Firefox", url: "firefox" },
    { id: "Brave", url: "brave" },
    { id: "Opera", url: "opera" },
    { id: "Vivaldi", url: "vivaldi" },
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
    { id: "LGHub", url: "lghub" },
    { id: "EpicGames", url: "epicgameslauncher" },
    { id: "EAApp", url: "ea-app" },
    { id: "Minecraft", url: "minecraft-launcher" },
    { id: "FaceIT", url: "faceit" },
    { id: "PlayNite", url: "playnite" },
    { id: "PrismLauncher", url: "prismlauncher" },
    { id: "UbisoftConnect", url: "ubisoft-connect" },
    { id: "BorderlessGaming", url: "borderlessgaming" },
    // Utilities
    { id: "1Password", url: "1password" },
    { id: "BitWarden", url: "bitwarden" },
    { id: "KeePass", url: "keepass" },
    { id: "Everything", url: "everything" },
    { id: "QuickLook", url: "quicklook" },
    { id: "Shell", url: "nilesoft-shell" },
    { id: "WindHawk", url: "windhawk" },
    { id: "FlowLauncher", url: "flow-launcher" },
    { id: "CCleaner", url: "ccleaner" },
    { id: "Revo", url: "revo-uninstaller" },
    { id: "TeamViewer", url: "teamviewer" },
    { id: "AnyDesk", url: "anydesk" },
    { id: "ImgBurn", url: "imgburn" },
    { id: "JDownloader", url: "jdownloader" },
    { id: "qBitTorrent", url: "qbittorrent" },
    { id: "BulkCrapUninstaller", url: "bulk-crap-uninstaller" },
    { id: "BulkRename", url: "bulkrenameutility" },
    { id: "AutoHotKey", url: "hotkey" },
    { id: "Afterburner", url: "msiafterburner" },
    { id: "CPU-Z", url: "cpu-z" },
    { id: "GPU-Z", url: "gpu-z" },
    { id: "HWInfo", url: "hwinfo" },
    { id: "HWMonitor", url: "hwmonitor" },
    { id: "DDU", url: "ddu" },
    { id: "Rainmeter", url: "rainmeter" },
    { id: "StartAllBack", url: "startallback" },
    { id: "VirtualBox", url: "virtualbox" },
    { id: "TransluscentTB", url: "translucenttb" },
    { id: "TotalCommander", url: "totalcommander" },
    { id: "WingetUI", url: "wingetui" },
    { id: "FXSound", url: "fxsound" },
    { id: "BitDefender", url: "bitdefenderavfree" },
    { id: "SnappyDriver", url: "snappy-driver-installer" },
    { id: "ProtonMail", url: "protonmail" },
    { id: "ProtonDrive", url: "protondrive" },
    { id: "ProtonPass", url: "protonpass" },
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
    { id: "DarkTable", url: "darktable" },
    { id: "AIMP", url: "aimp" },
    { id: "iTunes", url: "itunes" },
    { id: "foobar2000", url: "foobar2000" },
    { id: "EqualizerAPO", url: "equalizerapo" },
    { id: "Plex", url: "plex" },
    { id: "Jellyfin", url: "jellyfin" },
    { id: "MuseScore", url: "musescore" },
    { id: "Stremio", url: "stremio" },
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
    { id: "Clink", url: "clink-maintained" },
    { id: "Cursor", url: "cursoride" },
    { id: "Docker", url: "docker-desktop" },
    { id: "Git", url: "git" },
    { id: "GitHub", url: "github-desktop" },
    { id: "NodeJS", url: "nodejs" },
    { id: "Python3", url: "python3" },
    { id: "Rust", url: "rust" },
    { id: "Java", url: "javaruntime" },
    { id: "NET48", url: "netfx-4.8" },
    { id: "NET8", url: "dotnet" },
    { id: "Notepad++", url: "notepadplusplus" },
    { id: "SublimeText", url: "sublimetext3" },
    { id: "OhMyPosh", url: "oh-my-posh" },
    { id: "Neovim", url: "neovim" },
    { id: "VSCode", url: "vscode" },
  ];
  
  // Create manualURL array
  if (!window.manualURLs) {
    window.manualURLs = [];
  }

  // Get the checked checkboxes
  function getCheckedUrls() {
    return appList
      .filter((app) => {
        const element = document.getElementById(app.id);
        return element && element.checked;
      })
      .map((app) => app.url);
  }

  // Function to update the command display
  function updateCommandDisplay() {
    const checkedUrls = getCheckedUrls();
    const allUrls = [...checkedUrls, ...window.manualURLs];
    const finalURL = allUrls.join(" ");
    
    const command = allUrls.length > 0
      ? 'taskkill /f /im explorer.exe && start explorer.exe && start cmd /k "' +
        "choco install " +
        finalURL +
        ' -y --force --ignorepackageexitcodes"'
      : "";

    // Display the final URL in the div
    document.querySelector(".div-install").style.display =
      allUrls.length > 0 ? "block" : "none";
    document.querySelector(".chocolatey-container").style.display =
      allUrls.length > 0 ? "block" : "none";
    
    const commandDisplay = document.querySelector(".commandDisplay");
    commandDisplay.textContent = command;
    
    const installingApps = document.querySelector(".installingApps");
    installingApps.textContent = finalURL;

    const manualList = document.getElementById("manualList");
    if (window.manualURLs.length > 0) {
      manualList.innerHTML = "Manual packages added: " + window.manualURLs.join(" | ");
    }
  }

  // Add addButton click listener
  const addButton = document.getElementById("addApp");
    addButton.addEventListener("click", () => {
      const manualInput = document.getElementById("manualInput").value.trim();
      if (manualInput) {
        window.manualURLs.push(manualInput);
        document.getElementById("manualInput").value = ""; // Clear input
        updateCommandDisplay();
      }
    });

  updateCommandDisplay();
}

// Call the function on load
appsInstall();

// Set up checkbox event listeners
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("[js-target=install]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", appsInstall);
  });

  document.body.addEventListener("change", (event) => {
    if (event.target.matches("[js-target=install]")) {
      appsInstall();
    }
  });
});
