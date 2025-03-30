function appsInstall() {
  // List of apps
  const appList = [
    // Drivers
    { id: "Intel", url: "intel-dsa" },
    { id: "NVIDIA", url: "nvidia-display-driver" },
    { id: "Ryzen", url: "amd-ryzen-chipset" },
    // Browsers
    { id: "Brave", url: "brave" },
    { id: "Chrome", url: "googlechrome" },
    { id: "Chromium", url: "chromium" },
    { id: "Firefox", url: "firefox" },
    { id: "Floorp", url: "floorp" },
    { id: "LibreWolf", url: "librewolf" },
    { id: "Opera", url: "opera" },
    { id: "Thorium", url: "thorium" },
    { id: "Tor", url: "tor-browser" },
    { id: "Ungoogled", url: "ungoogled-chromium" },
    { id: "Vivaldi", url: "vivaldi" },
    { id: "Waterfox", url: "waterfox" },
    // Compression
    { id: "7Zip", url: "7zip" },
    { id: "NanaZip", url: "nanazip" },
    { id: "PeaZip", url: "peazip" },
    { id: "WinRAR", url: "winrar" },
    // Gaming
    { id: "BorderlessGaming", url: "borderlessgaming" },
    { id: "EAApp", url: "ea-app" },
    { id: "EpicGames", url: "epicgameslauncher" },
    { id: "FaceIT", url: "faceit" },
    { id: "GOGGalaxy", url: "goggalaxy" },
    { id: "LGHub", url: "lghub" },
    { id: "Minecraft", url: "minecraft-launcher" },
    { id: "PlayNite", url: "playnite" },
    { id: "PrismLauncher", url: "prismlauncher" },
    { id: "Steam", url: "steam" },
    { id: "UbisoftConnect", url: "ubisoft-connect" },
    // Utilities
    { id: "1Password", url: "1password" },
    { id: "AnyDesk", url: "anydesk" },
    { id: "AutoHotkey", url: "hotkey" },
    { id: "BitDefender", url: "bitdefenderavfree" },
    { id: "BitWarden", url: "bitwarden" },
    { id: "BulkCrapUninstaller", url: "bulk-crap-uninstaller" },
    { id: "BulkRename", url: "bulkrenameutility" },
    { id: "CCleaner", url: "ccleaner" },
    { id: "CPU-Z", url: "cpu-z" },
    { id: "DDU", url: "ddu" },
    { id: "Everything", url: "everything" },
    { id: "FlowLauncher", url: "flow-launcher" },
    { id: "FXSound", url: "fxsound" },
    { id: "GPU-Z", url: "gpu-z" },
    { id: "HWInfo", url: "hwinfo" },
    { id: "HWMonitor", url: "hwmonitor" },
    { id: "ImgBurn", url: "imgburn" },
    { id: "JDownloader", url: "jdownloader" },
    { id: "KeePass", url: "keepass" },
    { id: "ModernFlyouts", url: "modernflyouts" },
    { id: "Afterburner", url: "msiafterburner" },
    { id: "Shell", url: "nilesoft-shell" },
    { id: "ProtonDrive", url: "protondrive" },
    { id: "ProtonMail", url: "protonmail" },
    { id: "ProtonPass", url: "protonpass" },
    { id: "qBitTorrent", url: "qbittorrent" },
    { id: "QuickLook", url: "quicklook" },
    { id: "Rainmeter", url: "rainmeter" },
    { id: "Revo", url: "revo-uninstaller" },
    { id: "SnappyDriver", url: "snappy-driver-installer" },
    { id: "StartAllBack", url: "startallback" },
    { id: "TeamViewer", url: "teamviewer" },
    { id: "TotalCommander", url: "totalcommander" },
    { id: "TransluscentTB", url: "translucenttb" },
    { id: "VirtualBox", url: "virtualbox" },
    { id: "WindHawk", url: "windhawk" },
    { id: "WingetUI", url: "wingetui" },
    // Pro Tools
    { id: "AdvancedIpScanner", url: "advanced-ip-scanner" },
    { id: "AngryIpScanner", url: "angryip" },
    { id: "MullvadVPN", url: "mullvad-app" },
    { id: "OpenVPN", url: "openvpn" },
    { id: "ProtonVPN", url: "protonvpn" },
    { id: "PuTTY", url: "putty" },
    { id: "SimpleWall", url: "simplewall" },
    { id: "WireShark", url: "wireshark" },
    { id: "WireGuard", url: "wireguard" },
    // Microsoft Tools
    { id: "Autoruns", url: "autoruns" },
    { id: "Nuget", url: "nuget.commandline" },
    { id: "OneDrive", url: "onedrive" },
    { id: "PowerToys", url: "powertoys" },
    { id: "PowerBI", url: "powerbi" },
    { id: "ProcessMonitor", url: "procmon" },
    { id: "vcredist", url: "vcredist140" },
    { id: "WinTerminal", url: "microsoft-windows-terminal" },
    // Media
    { id: "AIMP", url: "aimp" },
    { id: "Audacity", url: "audacity" },
    { id: "Clementine", url: "clementine" },
    { id: "DarkTable", url: "darktable" },
    { id: "digiKam", url: "digikam" },
    { id: "EarTrumpet", url: "eartrumpet" },
    { id: "EqualizerAPO", url: "equalizerapo" },
    { id: "FFmpeg", url: "ffmpeg" },
    { id: "foobar2000", url: "foobar2000" },
    { id: "FreeCAD", url: "freecad" },
    { id: "HandBrake", url: "handbrake" },
    { id: "ImageGlass", url: "imageglass" },
    { id: "iTunes", url: "itunes" },
    { id: "Jellyfin", url: "jellyfin" },
    { id: "KLite", url: "k-litecodecpackbasic" },
    { id: "MediaMonkey", url: "mediamonkey" },
    { id: "MuseScore", url: "musescore" },
    { id: "OBS", url: "obs-studio" },
    { id: "Plex", url: "plex" },
    { id: "Spicetify", url: "spicetify-cli" },
    { id: "Spotify", url: "spotify" },
    { id: "Stremio", url: "stremio" },
    { id: "VLC", url: "vlc" },
    { id: "VoiceMeeter", url: "voicemeeter" },
    // Comunication
    { id: "Discord", url: "discord" },
    { id: "Signal", url: "signal" },
    { id: "Skype", url: "skype" },
    { id: "Slack", url: "slack" },
    { id: "Teams", url: "microsoft-teams" },
    { id: "Telegram", url: "telegram" },
    { id: "Thunderbird", url: "thunderbird" },
    { id: "Whatsapp", url: "whatsapp" },
    { id: "Zoom", url: "zoom" },
    { id: "Zulip", url: "zulip" },
    // Imaging
    { id: "Blender", url: "blender" },
    { id: "GIMP", url: "gimp" },
    { id: "Greenshot", url: "greenshot" },
    { id: "inkScape", url: "inkscape" },
    { id: "KdenLive", url: "kdenlive" },
    { id: "Krita", url: "krita" },
    { id: "LightShot", url: "lightshot" },
    { id: "ShareX", url: "sharex" },
    // Documents
    { id: "AdobeReader", url: "adobereader" },
    { id: "AFFiNE", url: "affine-client" },
    { id: "FoxItReader", url: "foxitreader" },
    { id: "Joplin", url: "joplin" },
    { id: "LibreOffice", url: "libreoffice-fresh" },
    { id: "LogSeq", url: "logseq" },
    { id: "Obsidian", url: "obsidian" },
    { id: "OpenOffice", url: "openoffice" },
    { id: "PDF24", url: "pdf24" },
    { id: "simplenote", url: "simplenote" },
    { id: "SumatraPDF", url: "sumatrapdf" },
    // Security
    { id: "Avast", url: "avastfreeantivirus" },
    { id: "AVG", url: "avgantivirusfree" },
    { id: "MalwareBytes", url: "malwarebytes" },
    // For Developers
    { id: "Clink", url: "clink-maintained" },
    { id: "Cursor", url: "cursoride" },
    { id: "Docker", url: "docker-desktop" },
    { id: "Git", url: "git" },
    { id: "GitHub", url: "github-desktop" },
    { id: "GitHubCLI", url: "gh" },
    { id: "Go", url: "go" },
    { id: "Godot", url: "godot" },
    { id: "Java", url: "javaruntime" },
    { id: "Neovim", url: "neovim" },
    { id: "NET48", url: "netfx-4.8" },
    { id: "NET8", url: "dotnet" },
    { id: "NodeJS", url: "nodejs" },
    { id: "Notepad++", url: "notepadplusplus" },
    { id: "OhMyPosh", url: "oh-my-posh" },
    { id: "Python3", url: "python3" },
    { id: "Rust", url: "rust" },
    { id: "SublimeText", url: "sublimetext3" },
    { id: "VSCode", url: "vscode" },
    { id: "VSCodium", url: "vscodium" },
    { id: "VS", url: "visualstudio-installer" },
    { id: "WSL2", url: "wsl2" },
    { id: "Yarn", url: "yarn" },
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

    const command =
      allUrls.length > 0
        ? 'taskkill /f /im explorer.exe && start explorer.exe && start cmd /k "' +
          "choco install " +
          finalURL +
          ' -y --force --ignorepackageexitcodes"'
        : "";

    // Display the final URL in the div
    document.querySelector(".div-install").style.display = allUrls.length > 0 ? "block" : "none";
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
